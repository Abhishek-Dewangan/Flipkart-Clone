import React, {useEffect} from 'react';
import styles from './ProductDetailsPage.module.css';
import {useParams} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {getProductDetails} from '../../Services/Actions/ProductAction';

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const {productid} = useParams();
  const {products, producDetails} = useSelector(
    (state) => state.ProductReducer
  );
  // console.log(product);
  useEffect(() => {
    const product = products.filter((elem) => elem._id === productid);
    getProductDetails(dispatch, product[0]);
  }, []);
  useEffect(() => {
    console.log(producDetails);
  }, [producDetails]);
  return (
    <div className={styles.productDetailsContainer}>
      <section className={styles.leftSection}></section>
      <section className={styles.rightSection}></section>
    </div>
  );
};

export default ProductDetailsPage;
