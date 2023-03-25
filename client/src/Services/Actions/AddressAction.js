import axios from 'axios';

// Address action types
export const GET_ADDRESS = 'GET_ADDRESS';
export const ADD_ADDRESS = 'ADD_ADDRESS';
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS';
export const IS_LOADING_IN_ADDRESS = 'IS_LOADING_IN_ADDRESS';
export const IS_ERROR_IN_ADDRESS = 'IS_ERROR_IN_ADDRESS';
export const REFRESH_ADDRESS = 'REFRESH_ADDRESS';

// Add an address
export const addAddress = async (dispatch, address) => {
  dispatch({type: IS_LOADING_IN_ADDRESS});
  try {
    const response = await axios.post(
      `http://localhost:8080/api/addnewaddress`,
      address
    );
    // console.log(response.data);
    dispatch({type: ADD_ADDRESS, payload: response.data});
  } catch (error) {
    dispatch({type: IS_ERROR_IN_ADDRESS, payload: error});
  }
};

// Get all addresses
export const getAddress = async (dispatch, userid) => {
  // console.log(userid);
  dispatch({type: IS_LOADING_IN_ADDRESS});
  try {
    const response = await axios.get(
      `http://localhost:8080/api/getaddress/${userid}`
    );
    // console.log(response.data);
    dispatch({type: GET_ADDRESS, payload: response.data});
  } catch (error) {
    dispatch({type: IS_ERROR_IN_ADDRESS, payload: error});
  }
};

// Update an address
export const updateAddress = async (dispatch, addressId, address) => {
  dispatch({type: IS_LOADING_IN_ADDRESS});
  try {
    const response = await axios.put(
      `http://localhost:8080/api/updateaddress/${addressId}`,
      address
    );
    // console.log(response.data);
    response.data.data = {_id: addressId, ...address};
    // console.log(response.data);
    dispatch({type: UPDATE_ADDRESS, payload: response.data});
  } catch (error) {
    dispatch({type: IS_ERROR_IN_ADDRESS, payload: error});
  }
};

export const refreshAddress = async (dispatch) => {
  dispatch({type: REFRESH_ADDRESS});
};
