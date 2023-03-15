import {useDispatch, useSelector} from 'react-redux';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import styles from './ShowProducts.module.css';
import fAssured from '../../Assets/Images/f-assured.png';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';
import {
  addCart,
  addWishlist,
  removeWishlist,
} from '../../Assets/ReusableFuctions';

const ShowProducts = ({products}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {pathname} = useLocation();
  const {user} = useSelector((state) => state.UserReducer);
  const wishlist = useSelector((state) => state.WishlistReducer);
  const cart = useSelector((state) => state.CartReducer);
  // console.log(product.isLoading);

  return (
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
                <button className={styles.buyNowBtn}>
                  <GiElectric />
                  Buy Now
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowProducts;
