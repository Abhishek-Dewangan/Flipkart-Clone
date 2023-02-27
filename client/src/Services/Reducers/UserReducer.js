import {IS_ERROR, SIGNIN, SIGNOUT, SIGNUP} from '../Actions/UserAction';

const initialState = {
  token: '',
  isError: false,
  isLoading: false,
  user: {},
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    }
    case SIGNUP: {
      return {
        ...state,
      };
    }
    case SIGNOUT: {
      return {
        ...state,
        token: '',
        user: {},
      };
    }
    default: {
      return state;
    }
  }
};
