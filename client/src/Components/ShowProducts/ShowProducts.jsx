import React from 'react';
import styles from './ShowProducts.module.css';
import fAssured from '../../Assets/Images/f-assured.png';

const ShowProducts = ({products}) => {
  console.log(products);
  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        return (
          <div key={elem._id} className={styles.productBox}>
            <div classname={styles.productImageDiv}>
              <img
                src={elem.thumbnail}
                alt={elem.category}
                className={styles.productImage}
              />
            </div>
            <p className={styles.productName}>{elem.name}</p>
            <img
              className={styles.fAssured}
              src={fAssured}
              alt='Flipkart assured'
            />
            <p className={styles.price}>
              <span className={styles.currentPrice}>₹{elem.current_price}</span>{' '}
              <strike className={styles.originalPrice}>
                ₹{elem.original_price}
              </strike>
            </p>
            <div className={styles.buttonDiv}>
              <button>Add to Cart</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
