import {
  IS_ERROR,
  IS_LOADING,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from '../Actions/UserAction';

const userData = JSON.parse(localStorage.getItem('user')) || {};

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  token: '',
  user: userData,
  message: '',
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        message: '',
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        message: action.payload.message,
      };
    }
    case SIGNIN: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
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
        isSuccess: true,
        message: action.payload.message,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        token: '',
        user: {},
        message: action.payload.message,
      };
    }
    default: {
      return state;
    }
  }
};
