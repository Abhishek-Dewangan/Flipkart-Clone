import axios from 'axios';

// Actions types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PROUDUCT_DETAILS = 'GET_PROUDUCT_DETAILS';
export const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const IS_ERROR = 'IS_ERROR';
export const IS_LOADING = 'IS_LOADING';

// Get products
export const getPrducts = async (dispatch) => {
  dispatch({type: IS_LOADING});
  try {
    const products = await axios.get('http://localhost:8080/api/getproducts');
    // console.log(products.data);
    dispatch({type: GET_PRODUCTS, payload: products.data});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR, payload: error});
  }
};

//  Get products by category
export const getProductsByCategory = async (dispatch, category) => {
  dispatch({type: IS_LOADING});
  try {
    const products = await axios.get(
      `http://localhost:8080/api/getproductsbycategory/${category}`
    );
    // console.log(products);
    dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: products.data});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// Get product by id
export const getProductById = async (dispatch, id) => {
  dispatch({type: IS_LOADING});
  try {
    const product = await axios.get(
      `http:/localhost:8080/api/getproductbyid/${id}`
    );
    dispatch({type: GET_PRODUCTS_BY_ID, payload: product});
  } catch (error) {
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// Get prouduct details
export const getProductDetails = async (dispatch, product) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.get(product.query_url);
    // console.log(res);
    if (!res.data.thumbnails.length) res.data.thumbnails = [product.thumbnail];
    dispatch({type: GET_PROUDUCT_DETAILS, payload: res});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR, payload: error});
  }
};
