import React from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams} from 'react-router-dom';

const ProductCategoryPage = () => {
  const {category} = useParams();
  return (
    <div>
      <h1>procudtcategory</h1>
    </div>
  );
};

export default ProductCategoryPage;
