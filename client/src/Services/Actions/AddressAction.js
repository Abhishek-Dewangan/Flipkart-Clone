import axios from 'axios';

// Address action types
export const GET_ADDRESS = 'GET_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const IS_LOADING_IN_ADDRESS = 'IS_LOADING_IN_ADDRESS';
export const IS_ERROR_IN_ADDRESS = 'IS_ERROR_IN_ADDRESS';

// Add address
export const addAddress = async (dispatch, address) => {
  dispatch({type: IS_LOADING_IN_ADDRESS});
  try {
    const response = await axios.post(`http://8080/api/addaddress`, address);
    dispatch({type: ADD_ADDRESS, payload: response.data});
  } catch (error) {
    dispatch({type: IS_ERROR_IN_ADDRESS, payload: error});
  }
};
