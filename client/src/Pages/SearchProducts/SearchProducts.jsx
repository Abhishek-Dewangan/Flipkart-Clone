import React, {useEffect, useState} from 'react';
import styles from './SearchProducts.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import ShowProducts from '../../Components/ShowProducts/ShowProducts';
import {searchProducts} from '../../Services/Actions/ProductAction';

const SearchProducts = () => {
  const {query} = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer);
  //   console.log(query);

  useEffect(() => {
    searchProducts(dispatch, product.products, query);
  }, [query, product.products]);

  return (
    <div className={styles.searchProductsContainer}>
      <ShowProducts
        products={product.searchProducts}
        isLoading={product.isLoading}
        isSuccess={product.isSuccess}
      />
    </div>
  );
};

export default SearchProducts;
