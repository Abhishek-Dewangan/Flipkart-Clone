import React, {useEffect} from 'react';
import styles from './ProductDetailsPage.module.css';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../Services/Actions/ProductAction';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const {productid} = useParams();
  const {products, productDetails} = useSelector(
    (state) => state.ProductReducer
  );
  useEffect(() => {
    const product = products.filter((elem) => elem._id === productid);
    product.length && getProductDetails(dispatch, product[0]);
  }, [products]);

  useEffect(() => {
    console.log(productDetails);
  }, [productDetails]);
  return (
    <div className={styles.productDetailsContainer}>
      <section className={styles.leftSection}></section>
      <section className={styles.rightSection}></section>
    </div>
  );
};

export default ProductDetailsPage;
