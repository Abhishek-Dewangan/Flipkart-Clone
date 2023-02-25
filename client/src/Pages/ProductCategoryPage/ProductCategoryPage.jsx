import React, {useEffect} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../../Services/Actions/ProductAction';

const ProductCategoryPage = () => {
  const {category} = useParams();
  const dispatch = useDispatch();
  const {categoryProducts} = useSelector((state) => state.ProductReducer);
  useEffect(() => {
    getProductsByCategory(dispatch, category);
  }, []);
  useEffect(() => {
    console.log(categoryProducts);
  }, [categoryProducts]);
  return (
    <div>
      <h1>procudtcategory</h1>
    </div>
  );
};

export default ProductCategoryPage;
