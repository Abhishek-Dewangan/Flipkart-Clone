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

// Get wishlist products
export const getWishlistProducts = async (dispatch, userId) => {
  try {
    const wishlistData = await axios.get(
      `http://localhost:8080/api/getwishlistproducts/${userId}`
    );
    dispatch({type: GET_WISHLIST_PRODUCTS, payload: wishlistData});
  } catch (error) {
    dispatch({type: ERROR, payload: error});
  }
};

// Remove from wishlist
export const removeFromWishlist = async (dispatch, productId) => {
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/removefromwishlist/${productId}`
    );
    dispatch({type: REMOVE_FROM_WISHLIST, payload: res});
  } catch (error) {
    dispatch({type: ERROR, payload: error});
  }
};
