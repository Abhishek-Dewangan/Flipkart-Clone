import axios from "axios";

// Action types
export const IS_ERROR_IN_WISHLIST = "IS_ERROR_IN_WISHLIST";
export const IS_LOADING_IN_WISHLIST = "IS_LOADING_IN_WISHLIST";
export const ADD_TO_WISHLIST = "ADD_TO_WISHLIST";
export const GET_WISHLIST_PRODUCTS = "GET_WISHLIST_PRODUCTS";
export const REMOVE_FROM_WISHLIST = "REMOVE_FROM_WISHLIST";
export const REMOVE_ALL_FROM_WISHLIST = "REMOVE_ALL_FROM_WISHLIST";
export const REFRESH_WISHLIST = "REFRESH_WISHLIST";

// Add to wishlist
export const addToWishlist = async (dispatch, product) => {
  dispatch({ type: IS_LOADING_IN_WISHLIST });
  try {
    const res = await axios.post(
      "https://crimson-crane-vest.cyclic.app/api/addtowishlist",
      product
    );
    dispatch({ type: ADD_TO_WISHLIST, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_WISHLIST, payload: error.response.data });
  }
};

// Get wishlist products
export const getWishlistProducts = async (dispatch, userId) => {
  dispatch({ type: IS_LOADING_IN_WISHLIST });
  try {
    const res = await axios.get(
      `https://crimson-crane-vest.cyclic.app/api/getwishlistproducts/${userId}`
    );
    dispatch({ type: GET_WISHLIST_PRODUCTS, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_WISHLIST, payload: error.response.data });
  }
};

// Remove from wishlist
export const removeFromWishlist = async (dispatch, productId) => {
  dispatch({ type: IS_LOADING_IN_WISHLIST });
  try {
    const res = await axios.delete(
      `https://crimson-crane-vest.cyclic.app/api/removefromwishlist/${productId}`
    );
    dispatch({ type: REMOVE_FROM_WISHLIST, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_WISHLIST, payload: error });
  }
};

// Remove all form wishlist
export const removeAllFromWishlist = async (dispatch, userId) => {
  dispatch({ type: IS_LOADING_IN_WISHLIST });
  try {
    const res = await axios.delete(
      `https://crimson-crane-vest.cyclic.app/api/${userId}`
    );
    dispatch({ type: REMOVE_ALL_FROM_WISHLIST, payload: res });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_WISHLIST, payload: error });
  }
};

// Refreshing or returning to initial state
export const refreshWishlist = async (dispatch) => {
  dispatch({ type: REFRESH_WISHLIST });
};
