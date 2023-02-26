import {
  ADD_TO_CART,
  GET_CART_DATA,
  ERROR,
  REMOVE_ALL_FROM_CART,
  REMOVE_FROM_CART,
} from '../Actions/CartAction';

const initialState = {
  cartData: [],
  isLoading: false,
  isError: false,
};

export const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return {
        ...state,
        cartData: [...state.cartData, action.payload],
      };
    }
    case GET_CART_DATA: {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cartData: action.payload,
      };
    }
    case REMOVE_ALL_FROM_CART: {
      return {
        ...state,
        cartData: [],
      };
    }
    default: {
      return state;
    }
  }
};
