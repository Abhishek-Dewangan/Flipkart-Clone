import axios from 'axios';

// Actions type
export const ADD_TO_CART = 'ADD_TO_CART';
export const GET_CART_DATA = 'GET_CART_DATA';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const RAMOVE_ALL_FROM_CART = 'RAMOVE_ALL_FROM_CART';
export const ERROR = 'ERROR';

// Add to cart
export const addToCart = async (dispatch, product) => {
  try {
    const res = await axios.post(
      'http://localhost:8080/api/addtocart',
      product
    );
    dispatch({type: ADD_TO_CART, payload: res});
  } catch (error) {
    dispatch({type: ERROR, payload: error});
  }
};

// Get cart data
export const getCartData = async (dispatch) => {
  try {
    const cartData = await axios.get('http://localhost:8080/api/getcartdata');
    dispatch({type: GET_CART_DATA, payload: cartData});
  } catch (error) {
    dispatch({type: ERROR, payload: error});
  }
};
