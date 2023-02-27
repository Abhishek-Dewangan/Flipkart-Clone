import {IS_ERROR, SIGNIN, SIGNOUT, SIGNUP} from '../Actions/UserAction';

const initialState = {
  token: '',
  isError: false,
  isLoading: false,
  user: {},
};
