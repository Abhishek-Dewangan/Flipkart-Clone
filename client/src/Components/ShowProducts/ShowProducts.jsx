import React, {useEffect} from 'react';
import axios from 'axios';
import styles from './ShowProducts.module.css';
import {Link} from 'react-router-dom';
import fAssured from '../../Assets/Images/f-assured.png';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';
import {addToWishlist} from '../../Services/Actions/WishlistAction';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-toastify';

const ShowProducts = ({products}) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.UserReducer);
  const {wishlistData, isError, isSuccess, isLoading, message} = useSelector(
    (state) => state.WishlistReducer
  );

  const alertMessage = () => {
    isSuccess && toast.success(message);
    isError && toast.error(message);
  };

  const addWishlist = (elem) => {
    console.log(elem);
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

  useEffect(() => {
    message && alertMessage();
  }, [message]);

  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        const discount = Math.floor(
          100 - (elem.current_price * 100) / elem.original_price
        );
        return (
          <div key={elem._id} className={styles.productBox}>
            <AiOutlineHeart
              onClick={() => addWishlist(elem)}
              className={styles.wishlistIcon}
              style={{stroke: 'silver', strokeWidth: '50'}}
            />
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
