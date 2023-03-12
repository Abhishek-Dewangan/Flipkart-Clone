import {useEffect} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams,useLocation} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../../Services/Actions/ProductAction';
import ShowProducts from '../../Components/ShowProducts/ShowProducts';
import SubHeader from '../../Components/SubHeader/SubHeader';
import FilterBar from '../../Components/FilterBar/FilterBar';

const ProductCategoryPage = () => {
  const {category} = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const {categoryProducts, offerProducts} = useSelector(
    (state) => state.ProductReducer
  );

  useEffect(() => {
    category !== 'topoffers' && getProductsByCategory(dispatch, category);
  }, [category]);

  return (
    <div className={styles.productCategoryContainer}>
      <SubHeader />
      <div className={styles.categoryBox}>
        <FilterBar />
        {category === 'topoffers' ? (
          <ShowProducts products={offerProducts} />
        ) : (
          <ShowProducts products={categoryProducts} />
        )}
      </div>
    </div>
  );
};

export default ProductCategoryPage;
