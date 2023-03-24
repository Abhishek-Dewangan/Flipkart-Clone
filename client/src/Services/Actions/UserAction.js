import axios from 'axios';

// Action types
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const IS_ERROR_IN_USER = 'IS_ERROR_IN_USER';
export const IS_LOADING_IN_USER = 'IS_LOADING_IN_USER';

// User Signup/Register
export const signup = async (dispatch, user) => {
  // consolw.log()
  dispatch({type: IS_LOADING_IN_USER});
  try {
    const res = await axios.post(`http://localhost:8080/api/signup`, user);
    console.log(res.data);
    dispatch({type: SIGNUP, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR_IN_USER, payload: error.response.data});
  }
};

// User Signin/Login
export const signin = async (dispatch, user) => {
  dispatch({type: IS_LOADING_IN_USER});
  try {
    const res = await axios.post(`http://localhost:8080/api/signin`, user);
    // console.log(res.data);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    dispatch({type: SIGNIN, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR_IN_USER, payload: error.response.data});
  }
};

// User Signout/Logout
export const signout = async (dispatch, token) => {
  console.log(token);
  dispatch({type: IS_LOADING_IN_USER});
  try {
    const res = await axios.post(`http://localhost:8080/api/signout`, {
      token: token,
    });
    localStorage.removeItem('user');
    // console.log(res.data);
    dispatch({type: SIGNOUT, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR_IN_USER, payload: error.response.data});
  }
};
