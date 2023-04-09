import { useEffect } from "react";
import styles from "./SearchProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ShowProducts from "../../Components/ShowProducts/ShowProducts";
import { searchProducts } from "../../Services/Actions/ProductAction";
import emptyImage from "../../Assets/Images/empty.png";

const SearchProducts = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.ProductReducer);

  useEffect(() => {
    searchProducts(dispatch, product.products, query);
  }, [query, product.products]);

  return (
    <div className={styles.searchProductsContainer}>
      {product.searchProducts.length ? (
        <ShowProducts
          products={product.searchProducts}
          isLoading={product.isLoading}
          isSuccess={product.isSuccess}
        />
      ) : (
        <div className={styles.emptyWishlist}>
          <img src={emptyImage} alt="Empty Item" />
          <h4>Not Found</h4>
          <p>Not matching any products!</p>
        </div>
      )}
    </div>
  );
};

export default SearchProducts;
