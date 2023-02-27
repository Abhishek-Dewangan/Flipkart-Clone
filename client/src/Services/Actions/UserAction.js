import axios from 'axios';

// Action types
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const IS_ERROR = 'IS_ERROR';

// Signup/Register
export const signup = async (dispatch, user) => {
  try {
    const res = await axios.post(`http://localhost:8080/api/signup`, user);
    dispatch({type: SIGNUP, payload: res});
  } catch (error) {
    dispatch({type: IS_ERROR, payload: error});
  }
};
