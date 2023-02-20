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
    const products = await axios.get('http://localhost/api/getproducts');
    dispatch({type: IS_SUCCESS, payload: products});
  } catch (error) {
    dispatch({type: IS_ERROR, payload: error});
  }
};
