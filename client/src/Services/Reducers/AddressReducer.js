import {
  ADD_ADDRESS,
  GET_ADDRESS,
  IS_ERROR_IN_ADDRESS,
  IS_LOADING_IN_ADDRESS,
  UPDATE_ADDRESS,
} from '../Actions/AddressAction';

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
      const index = state.addressData.findIndex(
        (elem) => elem._id === action.payload.data._id
      );
      // console.log(action.payload.data);
      // break;
      // state.addressData[0] = ;
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSucces: true,
        addressData: [action.payload.data],
      };
    }
    default:
      return state;
  }
};
