import {
  IS_ERROR_IN_CART,
  IS_LOADING_IN_CART,
  ADD_TO_CART,
  GET_CART_DATA,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
  REFRESH_CART,
  REMOVE_MULTIPLE_FROM_CART,
} from '../Actions/CartAction';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: '',
  cartData: [],
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_CART: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        isSuccess: false,
        message: '',
      };
    }
    case IS_ERROR_IN_CART: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
        message: action.payload.message,
      };
    }
    case ADD_TO_CART: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
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
        message: action.payload.message,
        cartData: updatedCartData,
      };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
        cartData: [],
      };
    }
    case REMOVE_MULTIPLE_FROM_CART: {
      const updatedCartData = state.cartData.filter(
        (elem) => !action.payload.includes(elem.productId)
      );
      // console.log(updatedCartData);
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        cartData: updatedCartData,
      };
    }
    case REFRESH_CART: {
      return {
        isError: false,
        isLoading: false,
        isSuccess: false,
        message: '',
        cartData: [],
      };
    }
    default: {
      return state;
    }
  }
};
