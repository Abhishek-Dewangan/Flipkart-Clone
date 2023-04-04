import {
  IS_ERROR_IN_USER,
  IS_LOADING_IN_USER,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from "../Actions/UserAction";

const userData = JSON.parse(localStorage.getItem("user")) || {};

const initialState = {
  isError: false,
  isLoading: false,
  signinSuccess: false,
  signupSuccess: false,
  signoutSuccess: false,
  token: "",
  user: userData,
  message: "",
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_USER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        signinSuccess: false,
        signupSuccess: false,
        signoutSuccess: false,
        message: "",
      };
    }
    case IS_ERROR_IN_USER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        signinSuccess: false,
        signupSuccess: false,
        signoutSuccess: false,
        message: action.payload.message,
      };
    }
    case SIGNIN: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        signinSuccess: true,
        signupSuccess: false,
        signoutSuccess: false,
        token: action.payload.user.token,
        user: action.payload.user,
        message: action.payload.message,
      };
    }
    case SIGNUP: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        signinSuccess: false,
        signupSuccess: true,
        signoutSuccess: false,
        message: action.payload.message,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        signinSuccess: false,
        signupSuccess: false,
        signoutSuccess: true,
        token: "",
        user: {},
        message: action.payload.message,
      };
    }
    default: {
      return state;
    }
  }
};
