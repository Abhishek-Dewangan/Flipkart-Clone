import {
  IS_ERROR,
  IS_LOADING,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
} from '../Actions/UserAction';

const initialState = {
  isError: false,
  isLoading: false,
  token: '',
  user: {},
  message: '',
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        message: '',
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        message: action.payload.message,
      };
    }
    case SIGNIN: {
      return {
        ...state,
        isLoading: false,
        isError: false,
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
        message: action.payload.message,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        isLoading: false,
        isError: false,
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
