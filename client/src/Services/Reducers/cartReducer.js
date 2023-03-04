import {
  IS_ERROR,
  IS_LOADING,
  ADD_TO_CART,
  GET_CART_DATA,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
} from '../Actions/CartAction';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  cartData: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        isSuccess: false,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        cartData: [...state.cartData, action.payload.data],
      };
    }
    case GET_CART_DATA: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        cartData: action.payload.data,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedCartData = state.cartData.filter(
        (elem) => elem._id !== action.payload.data._id
      );
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        cartData: updatedCartData,
      };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        cartData: [],
      };
    }
    default: {
      return state;
    }
  }
};
