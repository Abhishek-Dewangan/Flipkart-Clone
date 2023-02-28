import React, {useEffect} from 'react';
import axios from axios;
import styles from './ProductDetailsPage.module.css';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';

const ProductDetailsPage = () => {
  const {productid} = useParams();
  const {products} = useSelector((state) => state.ProductReducer);
  const product = products.filter((elem) => elem._id === productid);
  console.log(product);
  return (
    <div className={styles.productDetailsContainer}>
      <section className={styles.leftSection}>
      </section>
      <section className={styles.rightSection}></section>
    </div>
  );
};

export default ProductDetailsPage;
