import {useEffect} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../../Services/Actions/ProductAction';
import ShowProducts from '../../Components/ShowProducts/ShowProducts';
import SubHeader from '../../Components/SubHeader/SubHeader';

const ProductCategoryPage = () => {
  const {category} = useParams();
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
      {category === 'topoffers' ? (
        <ShowProducts products={offerProducts} />
      ) : (
        <ShowProducts products={categoryProducts} />
      )}
    </div>
  );
};

export default ProductCategoryPage;
