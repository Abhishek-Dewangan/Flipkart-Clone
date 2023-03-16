import {useEffect, useState} from 'react';
import styles from './ProductCategoryPage.module.css';
import {useParams} from 'react-router-dom';
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
  const [discount, setDiscount] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const variables = [
    sortby,
    setSortby,
    discount,
    setDiscount,
    priceRange,
    setPriceRange,
  ];
  const {categoryProducts, offerProducts, isLoading, isSuccess} = useSelector(
    (state) => state.ProductReducer
  );

  // Filtering products bases on sorting type
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

  // Filtering products bases on dicount
  const filterByDiscount = (products) => {
    const minDiscount = Math.min(...discount);
    // console.log(minDiscount);
    return products.filter(
      (elem) =>
        minDiscount <=
        Math.floor(100 - (elem.current_price * 100) / elem.original_price)
    );
  };

  // Filtering products bases on price ranges
  const filterByPriceRange = (products) => {
    const minPrice = Math.min(...priceRange);
    const maxPrice = Math.max(...priceRange);
    // console.log(minPrice, maxPrice);
    return products.filter(
      (elem) => elem.current_price >= minPrice && elem.current_price <= maxPrice
    );
  };

  // Calling filter fuctions
  useEffect(() => {
    // console.log(category, priceRange);
    let result =
      category === 'topoffers' ? [...offerProducts] : [...categoryProducts];
    if (sortby) result = filterBySort(result);
    if (discount.length) result = filterByDiscount(result);
    if (priceRange.length) result = filterByPriceRange(result);
    setProducts([...result]);
  }, [sortby, discount, priceRange, category]);

  // Calling category product function
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
        <ShowProducts
          products={products}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
