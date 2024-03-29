import {
  ADD_ADDRESS,
  GET_ADDRESS,
  IS_ERROR_IN_ADDRESS,
  IS_LOADING_IN_ADDRESS,
  UPDATE_ADDRESS,
  REFRESH_ADDRESS,
} from "../Actions/AddressAction";

const initialState = {
  isLoading: false,
  isError: false,
  isSucces: false,
  addressData: [],
};

export const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_ADDRESS: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSucces: false,
      };
    }
    case IS_ERROR_IN_ADDRESS: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSucces: false,
      };
    }
    case GET_ADDRESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        addressData: action.payload.data[0] ? [action.payload.data[0]] : [],
      };
    }
    case ADD_ADDRESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSucces: true,
        addressData: [action.payload.data],
      };
    }
    case UPDATE_ADDRESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSucces: true,
        addressData: [action.payload.data],
      };
    }
    case REFRESH_ADDRESS: {
      return {
        isLoading: false,
        isError: false,
        isSucces: false,
        addressData: [],
      };
    }
    default:
      return state;
  }
};
