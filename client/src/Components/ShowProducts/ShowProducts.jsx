import React from 'react';
import axios from 'axios';
import styles from './ShowProducts.module.css';
import {Link} from 'react-router-dom';
import fAssured from '../../Assets/Images/f-assured.png';
import {AiOutlineHeart} from 'react-icons/ai';
import {FaShoppingCart} from 'react-icons/fa';
import {GiElectric} from 'react-icons/gi';

const ShowProducts = ({products}) => {
  console.log(products);

  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        const discount = Math.floor(
          (elem.current_price * 100) / elem.original_price
        );
        return (
          <div key={elem._id} className={styles.productBox}>
            <AiOutlineHeart
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
            <div className={styles.productTitle}>
              <p className={styles.productName}>{elem.name}</p>
              <img
                className={styles.fAssured}
                src={fAssured}
                alt='Flipkart assured'
              />
            </div>
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
