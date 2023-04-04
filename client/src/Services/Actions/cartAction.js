import axios from "axios";

// Actions type
export const IS_ERROR_IN_CART = "IS_ERROR_IN_CART";
export const IS_LOADING_IN_CART = "IS_LOADING_IN_CART";
export const ADD_TO_CART = "ADD_TO_CART";
export const GET_CART_DATA = "GET_CART_DATA";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const REMOVE_ALL_FROM_CART = "REMOVE_ALL_FROM_CART";
export const REFRESH_CART = "REFRESH_CART";
export const REMOVE_MULTIPLE_FROM_CART = "REMOVE_MULTIPLE_FROM_CART";

// Add to cart
export const addToCart = async (dispatch, product) => {
  dispatch({ type: IS_LOADING_IN_CART });
  try {
    const res = await axios.post(
      "http://localhost:8080/api/addtocart",
      product
    );
    dispatch({ type: ADD_TO_CART, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_CART, payload: error.response.data });
  }
};

// Get cart data
export const getCartProducts = async (dispatch, userId) => {
  dispatch({ type: IS_LOADING_IN_CART });
  try {
    const res = await axios.get(
      `http://localhost:8080/api/getcartproducts/${userId}`
    );
    dispatch({ type: GET_CART_DATA, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_CART, payload: error.response.data });
  }
};

// Remove from cart
export const removeFromCart = async (dispatch, productId) => {
  dispatch({ type: IS_LOADING_IN_CART });
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/removefromcart/${productId}`
    );
    dispatch({ type: REMOVE_FROM_CART, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_CART, payload: error });
  }
};

// Remove all from cart
export const removeAllFromCart = async (dispatch, userId) => {
  dispatch({ type: IS_LOADING_IN_CART });
  try {
    const res = await axios.delete(
      `http://localhost:8080/api/removeallfromcart/${userId}`
    );
    dispatch({ type: REMOVE_ALL_FROM_CART, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_CART, payload: error.response.data });
  }
};

// Removing multipe products from cart
export const removeMultiplefromCart = async (dispatch, productsId, userId) => {
  dispatch({ type: IS_LOADING_IN_CART });
  try {
    const data = { productsId: productsId };
    const res = await axios.delete(
      `http://localhost:8080/api/removemultiplefromcart/${userId}`,
      { data }
    );
    dispatch({ type: REMOVE_MULTIPLE_FROM_CART, payload: productsId });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_CART, payload: error.response.data });
  }
};

// Refreshing or returning to initial state
export const refreshCart = async (dispatch) => {
  dispatch({ type: REFRESH_CART });
};
