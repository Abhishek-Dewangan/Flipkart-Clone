import styles from './ShowProducts.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import {Card, Placeholder} from 'react-bootstrap';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';
import {
  addCart,
  addWishlist,
  buyNow,
  removeWishlist,
} from '../../Assets/ReusableFuctions';
import fAssured from '../../Assets/Images/f-assured.png';
import placeholderImage from '../../Assets/Images/placeholder-image.png';
import emptyImage from '../../Assets/Images/empty.png';
import {useEffect} from 'react';

const ShowProducts = ({products, isLoading, isSuccess}) => {
  console.log(products, isLoading, isSuccess);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();

  const placeholderData = new Array(12).fill({name: 'Abhishek'});
  const {user} = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);
  const cart = useSelector((state) => state.CartReducer);
  // const product = useSelector((state) => state.ProductReducer);

  return isSuccess && products.length ? (
    <div className={styles.showProductsContainer}>
      <p>Home{pathname.split('/').join(' > ')}</p>
      <div className={styles.productsContainer}>
        {products.map((elem) => {
          // Calculating discount percent
          const discount = Math.floor(
            100 - (elem.current_price * 100) / elem.original_price
          );

          // Checking the product is added in wishlist or not
          const isExistInWishlist = wishlist.wishlistData.filter(
            (element) =>
              element.productId === elem._id && element.userId === user.userId
          );

          // Checking the product is added in cart or not
          const isExistInCart = cart.cartData.filter(
            (element) =>
              element.productId === elem._id && element.userId === user.userId
          );

          return (
            <div key={elem._id} className={styles.productBox}>
              <div className={styles.wishlist}>
                {isExistInWishlist.length ? (
                  <AiFillHeart
                    className={styles.removeWishlistIcon}
                    onClick={() =>
                      removeWishlist(dispatch, isExistInWishlist[0]._id)
                    }
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() => addWishlist(dispatch, elem, user)}
                    className={styles.addWishlistIcon}
                    style={{stroke: 'silver', strokeWidth: '50'}}
                  />
                )}
              </div>
              <div className={styles.productImageDiv}>
                <Link to={`/productdetail/${elem._id}`}>
                  <img
                    src={elem.thumbnail}
                    alt={elem.category}
                    className={styles.productImage}
                  />
                </Link>
              </div>
              <Link
                to={`/productdetail/${elem._id}`}
                className={styles.productTitle}
              >
                <p className={styles.productName}>{elem.name}</p>
                <img
                  className={styles.fAssured}
                  src={fAssured}
                  alt='Flipkart assured'
                />
              </Link>
              <p className={styles.price}>
                <span className={styles.currentPrice}>
                  ₹{elem.current_price}
                </span>{' '}
                <strike className={styles.originalPrice}>
                  ₹{elem.original_price}
                </strike>
                <span className={styles.discount}>{discount}% off</span>
              </p>
              <div className={styles.buttonDiv}>
                {isExistInCart.length ? (
                  <button
                    className={styles.addToCartBtn}
                    onClick={() => navigate('/cart')}
                  >
                    <FaShoppingCart />
                    Go to Cart
                  </button>
                ) : (
                  <button
                    className={styles.addToCartBtn}
                    onClick={() => addCart(dispatch, elem, user)}
                  >
                    <FaShoppingCart />
                    Add to Cart
                  </button>
                )}
                <button
                  className={styles.buyNowBtn}
                  onClick={() => buyNow([elem], navigate)}
                >
                  <GiElectric />
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ) : isLoading ? (
    <div className={styles.showProductsContainer}>
      <p>Home{pathname.split('/').join(' > ')}</p>
      <div className={styles.productsContainer}>
        {placeholderData.map((elem, i) => {
          return (
            <Card className={styles.productBox} key={i}>
              <Card.Body>
                <Card.Img variant='top' src={placeholderImage} />
                <Placeholder as={Card.Title} animation='glow'>
                  <Placeholder xs={10} />
                </Placeholder>
                <Placeholder as={Card.Text} animation='glow'>
                  <Placeholder xs={6} />
                </Placeholder>
              </Card.Body>
              <div className={styles.buttonDiv}>
                <Placeholder.Button></Placeholder.Button>
                <Placeholder.Button></Placeholder.Button>
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  ) : (
    <div className={styles.emptyWishlist}>
      <img src={emptyImage} alt='Empty Item' />
      <h4>Not Found</h4>
      <p>Not matching any products!</p>
    </div>
  );
};

export default ShowProducts;
