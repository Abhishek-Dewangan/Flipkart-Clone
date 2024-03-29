import { useEffect, useState } from "react";
import styles from "./ProductCategoryPage.module.css";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductsByCategory } from "../../Services/Actions/ProductAction";
import ShowProducts from "../../Components/ShowProducts/ShowProducts";
import SubHeader from "../../Components/SubHeader/SubHeader";
import FilterBar from "../../Components/FilterBar/FilterBar";
import {
  filterByDiscount,
  filterByPriceRange,
  filterBySort,
} from "../../Assets/FilterFunctions";

const ProductCategoryPage = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [sortby, setSortby] = useState("");
  const [discount, setDiscount] = useState([]);
  const [priceRange, setPriceRange] = useState([]);
  const [filterStatus, setFilterStatus] = useState(false);
  const variables = [
    sortby,
    setSortby,
    discount,
    setDiscount,
    priceRange,
    setPriceRange,
  ];
  const { categoryProducts, offerProducts, isLoading, isSuccess } = useSelector(
    (state) => state.ProductReducer
  );

  // Calling filter fuctions
  const filterProducts = (result) => {
    if (discount.length) {
      result = filterByDiscount(result, discount);
    }
    if (priceRange.length) {
      result = filterByPriceRange(result, priceRange);
    }
    if (sortby) {
      result = filterBySort(
        result,
        sortby,
        offerProducts,
        categoryProducts,
        category,
        discount,
        priceRange
      );
    }
    setProducts([...result]);
  };

  useEffect(() => {
    let result =
      category === "topoffers" ? [...offerProducts] : [...categoryProducts];
    filterProducts(result);
  }, [sortby, discount, priceRange.length, category]);

  // Calling category product function
  useEffect(() => {
    getProductsByCategory(dispatch, category);
    setFilterStatus(false);
  }, [category]);

  useEffect(() => {
    category === "topoffers"
      ? setProducts([...offerProducts])
      : setProducts([...categoryProducts]);
  }, [categoryProducts, category, offerProducts]);

  return (
    <div className={styles.productCategoryContainer}>
      <SubHeader />
      <div className={styles.categoryBox}>
        <FilterBar variables={variables} setFilterStatus={setFilterStatus} />
        <ShowProducts
          products={products}
          isLoading={isLoading}
          isSuccess={isSuccess}
          filterStatus={filterStatus}
        />
      </div>
    </div>
  );
};

export default ProductCategoryPage;
