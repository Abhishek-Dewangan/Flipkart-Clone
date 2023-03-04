import axios from 'axios';

// Action types
export const IS_ERROR = 'IS_ERROR';
export const IS_LOADING = 'IS_LOADING';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const GET_WISHLIST_PRODUCTS = 'GET_WISHLIST_PRODUCTS';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const REMOVE_ALL_FROM_WISHLIST = 'REMOVE_ALL_FROM_WISHLIST';

// Add to wishlist
export const addToWishlist = async (dispatch, product) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.post(
      'http://localhost:8080/api/addtowishlist',
      product
    );
    console.log(res.data);
    dispatch({type: ADD_TO_WISHLIST, payload: res.data});
  } catch (error) {
    console.log(error);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// Get wishlist products
export const getWishlistProducts = async (dispatch, userId) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.get(
      `http://localhost:8080/api/getwishlistproducts/${userId}`
    );
    // console.log(res.data);
    dispatch({type: GET_WISHLIST_PRODUCTS, payload: res.data});
  } catch (error) {
    // console.log(error);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// Remove from wishlist
export const removeFromWishlist = async (dispatch, productId) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/removefromwishlist/${productId}`
    );
    console.log(res.data);
    dispatch({type: REMOVE_FROM_WISHLIST, payload: res.data});
  } catch (error) {
    console.log(error.response.data);
    dispatch({type: IS_ERROR, payload: error});
  }
};

// Remove all form wishlist
export const removeAllFromWishlist = async (dispatch, userId) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.delete(`http://localhost:8080/api/${userId}`);
    dispatch({type: REMOVE_ALL_FROM_WISHLIST, payload: res});
  } catch (error) {
    dispatch({type: IS_ERROR, payload: error});
  }
};
