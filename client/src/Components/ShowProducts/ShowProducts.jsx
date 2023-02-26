import React from 'react';
import styles from './ShowProducts.module.css';

const ShowProducts = ({products}) => {
  console.log(products);
  return (
    <div className={styles.showProductsContainer}>
      {products.map((elem) => {
        return (
          <div key={elem._id} className={styles.productBox}>
            <img
              src={elem.thumbnail}
              alt={elem.category}
              className={styles.productImage}
            />
            <p className={styles.productName}>{elem.name}</p>
            <p>
              <span className={styles.currentPrice}>₹{elem.current_price}</span>{' '}
              <strike className={styles.originalPrice}>₹{elem.original_price}</strike>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ShowProducts;
