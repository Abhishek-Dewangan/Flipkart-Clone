import axios from 'axios';

// Actions types
export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCTS_BY_ID = 'GET_PRODUCTS_BY_ID';
export const GET_PRODUCTS_BY_CATEGORY = 'GET_PRODUCTS_BY_CATEGORY';
export const IS_ERROR = 'IS_ERROR';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_LOADING = 'IS_LOADING';

// Get products
export const getPrducts = async (dispatch) => {
  try {
    const products = await axios.get('http://localhost:8080/api/getproducts');
    dispatch({type: GET_PRODUCTS, payload: products.data.data});
  } catch (error) {
    dispatch({type: IS_ERROR});
  }
};

//  Get products by category
export const getProductsByCategory = async (dispatch, category) => {
  try {
    const products = await axios.get(
      `http://localhost:8080/api/getproductsbycategory/${category}`
    );
    dispatch({type: GET_PRODUCTS_BY_CATEGORY, payload: products.data.data});
  } catch (error) {
    dispatch({type: IS_ERROR});
  }
};

// Get product by id
export const getProductById = async (dispatch, id) => {
  try {
    const product = await axios.get(
      `http:/localhost:8080/api/getproductbyid/${id}`
    );
    dispatch({type: GET_PRODUCTS_BY_ID, payload: product});
  } catch (error) {
    dispatch({type: IS_ERROR});
  }
};
