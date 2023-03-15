import {useEffect, useState} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams, useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../../Services/Actions/ProductAction';
import ShowProducts from '../../Components/ShowProducts/ShowProducts';
import SubHeader from '../../Components/SubHeader/SubHeader';
import FilterBar from '../../Components/FilterBar/FilterBar';

const ProductCategoryPage = () => {
  const {category} = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [sortby, setSortby] = useState('');
  const [discount, setDiscount] = useState();
  const {categoryProducts, offerProducts} = useSelector(
    (state) => state.ProductReducer
  );

  const filterBySort = (products) => {
    if (sortby === 'lth') {
      return products.sort((a, b) => a.price - b.price);
    } else if (sortby === 'htl') {
      return products.sort((a, b) => b.price - a.price);
    } else return products;
  };

  useEffect(() => {
    getProductsByCategory(dispatch, category);
  }, [category]);

  useEffect(() => {
    setProducts([...categoryProducts]);
  }, [categoryProducts, category, offerProducts]);

  return (
    <div className={styles.productCategoryContainer}>
      <SubHeader />
      <div className={styles.categoryBox}>
        <FilterBar />
        {category === 'topoffers' ? (
          <ShowProducts products={offerProducts} />
        ) : (
          <ShowProducts products={products} />
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
