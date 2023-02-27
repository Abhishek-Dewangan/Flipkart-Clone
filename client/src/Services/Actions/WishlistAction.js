import axios from 'axios';

// Action types
export const ERROR = '';
export const ADD_TO_WISHLIST = '';
export const GET_WISHLIST_PRODUCTS = '';
export const REMOVE_FROM_WISHLIST = '';
export const REMOVE_ALL_FROM_WISHLIST = '';

// Add to wishlist
export const addToWishlist = async (dispatch, product) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/addtowishlist',
      product
    );
    dispatch({type: ADD_TO_WISHLIST, payload: res});
  } catch (error) {
    dispatch({type: ERROR, payload: error});
  }
};
