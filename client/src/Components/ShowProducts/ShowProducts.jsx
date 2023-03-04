import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';
import {Link} from 'react-router-dom';
import styles from './ShowProducts.module.css';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../Services/Actions/WishlistAction';
import fAssured from '../../Assets/Images/f-assured.png';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';
import {addToCart} from '../../Services/Actions/CartAction';

const ShowProducts = ({products}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.UserReducer);
  const {wishlistData, isError, isSuccess, message} = useSelector(
    (state) => state.WishlistReducer
  );

  // Alert messages for wihslist actions
  const alertMessage = () => {
    isSuccess && toast.success(message);
    isError && toast.error(message);
  };

  // Adding product into wishlist
  const addWishlist = (elem) => {
    const product = {
      userId: user.userId,
      productId: elem._id,
      name: elem.name,
      category: elem.category,
      link: elem.link,
      current_price: elem.current_price,
      original_price: elem.original_price,
      discounted: elem.discounted,
      thumbnail: elem.thumbnail,
      query_url: elem.query_url,
    };
    addToWishlist(dispatch, product);
  };

  // Removing product from wishlist
  const removeWishlist = (id) => {
    removeFromWishlist(dispatch, id);
  };

  //  Adding product into cart
  const addCart = (elem) => {
    const product = {
      userId: user.userId,
      productId: elem._id,
      name: elem.name,
      category: elem.category,
      link: elem.link,
      current_price: elem.current_price,
      original_price: elem.original_price,
      discounted: elem.discounted,
      thumbnail: elem.thumbnail,
      query_url: elem.query_url,
    };
    addToCart(dispatch, product);
  };

  useEffect(() => {
    message && alertMessage();
  }, [message]);

  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        // Calculating discount percent
        const discount = Math.floor(
          100 - (elem.current_price * 100) / elem.original_price
        );

        // Checking the product is added in wishlist or not
        const isExistInWishlist = wishlistData.filter(
          (element) =>
            element.productId === elem._id && element.userId === user.userId
        );
        // isExistInWishlist.length && console.log(isExistInWishlist);

        return (
          <div key={elem._id} className={styles.productBox}>
            {isExistInWishlist.length ? (
              <AiFillHeart
                className={styles.removeWishlistIcon}
                onClick={() => removeWishlist(isExistInWishlist[0]._id)}
              />
            ) : (
              <AiOutlineHeart
                onClick={() => addWishlist(elem)}
                className={styles.addWishlistIcon}
                style={{stroke: 'silver', strokeWidth: '50'}}
              />
            )}
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
              to={`/productdetails/${elem._id}`}
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
              <span className={styles.currentPrice}>₹{elem.current_price}</span>{' '}
              <strike className={styles.originalPrice}>
                ₹{elem.original_price}
              </strike>
              <span className={styles.discount}>{discount}% off</span>
            </p>
            <div className={styles.buttonDiv}>
              <button className={styles.addToCartBtn}>
                <FaShoppingCart />
                Add to Cart
              </button>
              <button className={styles.buyNowBtn}>
                <GiElectric />
                Buy Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
