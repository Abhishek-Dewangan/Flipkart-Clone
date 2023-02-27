import {IS_ERROR, SIGNIN, SIGNOUT, SIGNUP} from '../Actions/UserAction';

const initialState = {
  token: '',
  isError: false,
  isLoading: false,
  user: {},
};

export const UserReducer = (state: initialState, action) => {
  switch (action.type) {
    case SIGNIN: {
      return {
        ...state,
        token: action.payload.token,
        user: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
