import axios from "axios";

// Actions types
export const GET_PRODUCTS = "GET_PRODUCTS";
export const GET_PRODUCTS_ON_SEARCH = "GET_PRODUCTS_ON_SEARCH";
export const GET_PRODUCT_DETAILS = "GET_PRODUCT_DETAILS";
export const GET_PRODUCTS_BY_ID = "GET_PRODUCTS_BY_ID";
export const GET_PRODUCTS_BY_CATEGORY = "GET_PRODUCTS_BY_CATEGORY";
export const IS_ERROR_IN_PRODUCT = "IS_ERROR_IN_PRODUCT";
export const IS_LOADING_IN_PRODUCT = "IS_LOADING_IN_PRODUCT";
export const FILTER_PRODUCTS = "FILTER_PRODUCTS";
export const GET_TOP_OFFER_PRODUCTS = "GET_TOP_OFFER_PRODUCTS";

// Get products
export const getPrducts = async (dispatch) => {
  dispatch({ type: IS_LOADING_IN_PRODUCT });
  try {
    const products = await axios.get(
      "https://crimson-crane-vest.cyclic.app/api/getproducts"
    );
    dispatch({ type: GET_PRODUCTS, payload: products.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_PRODUCT, payload: error });
  }
};

//  Get products by category
export const getProductsByCategory = async (dispatch, category) => {
  dispatch({ type: IS_LOADING_IN_PRODUCT });
  try {
    if (category === "topoffers") {
      const products = await axios.get(
        `https://crimson-crane-vest.cyclic.app/api/getofferproducts`
      );
      dispatch({ type: GET_TOP_OFFER_PRODUCTS, payload: products.data });
    } else {
      const products = await axios.get(
        `https://crimson-crane-vest.cyclic.app/api/getproductsbycategory/${category}`
      );
      dispatch({ type: GET_PRODUCTS_BY_CATEGORY, payload: products.data });
    }
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_PRODUCT, payload: error });
  }
};

// Get product by id
export const getProductById = async (dispatch, id) => {
  dispatch({ type: IS_LOADING_IN_PRODUCT });
  try {
    const product = await axios.get(
      `https://crimson-crane-vest.cyclic.app/api/getproductbyid/${id}`
    );
    dispatch({ type: GET_PRODUCTS_BY_ID, payload: product });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_PRODUCT, payload: error.response.data });
  }
};

// Get prouduct details
export const getProductDetails = async (dispatch, product) => {
  dispatch({ type: IS_LOADING_IN_PRODUCT });
  try {
    const res = await axios.get(product.query_url);
    if (!res.data.thumbnails.length) res.data.thumbnails = [product.thumbnail];
    dispatch({ type: GET_PRODUCT_DETAILS, payload: res });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_PRODUCT, payload: error });
  }
};

// Search prducts function
export const searchProducts = (dispatch, products, query) => {
  dispatch({ type: IS_LOADING_IN_PRODUCT });
  try {
    const res = products.filter(
      (elem) =>
        elem.name.toLowerCase().includes(query.toLowerCase()) ||
        elem.category.toLowerCase().includes(query.toLowerCase())
    );
    dispatch({ type: GET_PRODUCTS_ON_SEARCH, payload: res });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_PRODUCT });
  }
};
