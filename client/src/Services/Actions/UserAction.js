import axios from 'axios';

// Action types
export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const SIGNOUT = 'SIGNOUT';
export const IS_ERROR = 'IS_ERROR';
export const IS_LOADING = 'IS_LOADING';

// User Signup/Register
export const signup = async (dispatch, user) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.post(`http://localhost:8080/api/signup`, user);
    // console.log(res.data);
    dispatch({type: SIGNUP, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// User Signin/Login
export const signin = async (dispatch, user) => {
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.post(`http://localhost:8080/api/signin`, user);
    // console.log(res.data);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    dispatch({type: SIGNIN, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};

// User Signout/Logout
export const signout = async (dispatch, token) => {
  console.log(token);
  dispatch({type: IS_LOADING});
  try {
    const res = await axios.post(`http://localhost:8080/api/signout`, {token:token});
    localStorage.removeItem('user');
    // console.log(res.data);
    dispatch({type: SIGNOUT, payload: res.data});
  } catch (error) {
    // console.log(error.response.data);
    dispatch({type: IS_ERROR, payload: error.response.data});
  }
};
