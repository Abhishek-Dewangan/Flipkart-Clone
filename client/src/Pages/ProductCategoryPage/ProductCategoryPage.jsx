import {useEffect, useState} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams, useLocation} from 'react-router-dom';
import {Provider, useDispatch, useSelector} from 'react-redux';
import {getProductsByCategory} from '../../Services/Actions/ProductAction';
import ShowProducts from '../../Components/ShowProducts/ShowProducts';
import SubHeader from '../../Components/SubHeader/SubHeader';
import FilterBar from '../../Components/FilterBar/FilterBar';

const ProductCategoryPage = () => {
  const {category} = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [sortby, setSortby] = useState('');
  const [discount, setDiscount] = useState([]);
  const variables = [sortby, setSortby, discount, setDiscount];
  const {categoryProducts, offerProducts} = useSelector(
    (state) => state.ProductReducer
  );

  const filterBySort = (products) => {
    if (sortby === 'lth') {
      return products.sort((a, b) => a.current_price - b.current_price);
    } else if (sortby === 'htl') {
      return products.sort((a, b) => b.current_price - a.current_price);
    } else
      return category === 'topoffers'
        ? [...offerProducts]
        : [...categoryProducts];
  };

  const filterByDiscount = (products) => {
    const minDiscount = Math.min(...discount);
    console.log(minDiscount);
    return products.filter(
      (elem) =>
        minDiscount <=
        Math.floor(100 - (elem.current_price * 100) / elem.original_price)
    );
  };

  useEffect(() => {
    let result =
      category === 'topoffers' ? [...offerProducts] : [...categoryProducts];
    if (sortby) result = filterBySort(result);
    if (discount.length) result = filterByDiscount(result);
    console.log(result);
    setProducts([...result]);
  }, [sortby, discount, category]);

  useEffect(() => {
    getProductsByCategory(dispatch, category);
  }, [category]);

  useEffect(() => {
    category === 'topoffers'
      ? setProducts([...offerProducts])
      : setProducts([...categoryProducts]);
  }, [categoryProducts, category, offerProducts]);

  return (
    <div className={styles.productCategoryContainer}>
      <SubHeader />
      <div className={styles.categoryBox}>
        <FilterBar variables={variables} />
        <ShowProducts products={products} />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
