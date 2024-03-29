import axios from "axios";

// Orders action types
export const IS_LOADING_IN_ORDER = "IS_LOADING_IN_ORDER";
export const IS_ERROR_IN_ORDER = "IS_ERROR_IN_ORDER";
export const ADD_ORDER = "ADD_ORDER";
export const GET_ORDERS = "GET_ORDERS";
export const REFRESH_ORDER = "REFRESH_ORDER";

// Add order
export const addOrder = async (dispatch, products) => {
  dispatch({ type: IS_LOADING_IN_ORDER });
  try {
    const res = await axios.post(
      "https://crimson-crane-vest.cyclic.app/api/addorder",
      products
    );
    dispatch({ type: ADD_ORDER, payload: res.data });
    localStorage.removeItem("checkout");
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_ORDER, payload: error.response.data });
  }
};

// Get orders
export const getOrders = async (dispatch, userid) => {
  dispatch({ type: IS_LOADING_IN_ORDER });
  try {
    const res = await axios.get(
      `https://crimson-crane-vest.cyclic.app/api/getorders/${userid}`
    );
    dispatch({ type: GET_ORDERS, payload: res.data });
  } catch (error) {
    dispatch({ type: IS_ERROR_IN_ORDER, payload: error.response.data });
  }
};

// Refresh orders
export const refreshOreders = (dispatch) => {
  dispatch({ type: REFRESH_ORDER });
};
