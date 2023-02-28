import React from 'react';
import axios from 'axios';
import styles from './ShowProducts.module.css';
import fAssured from '../../Assets/Images/f-assured.png';
import {AiOutlineHeart} from 'react-icons/ai';

const ShowProducts = ({products}) => {
  console.log(products);

  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        return (
          <div key={elem._id} className={styles.productBox}>
            <AiOutlineHeart
              className={styles.wishlistIcon}
              style={{stroke: 'silver', strokeWidth: '50'}}
            />
            <div classname={styles.productImageDiv}>
              <img
                src={elem.thumbnail}
                alt={elem.category}
                className={styles.productImage}
              />
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
            </p>
            <div className={styles.buttonDiv}>
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
