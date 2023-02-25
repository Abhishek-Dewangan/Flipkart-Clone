import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  IS_ERROR,
  IS_SUCCESS,
  IS_LOADING,
} from '../Actions/ProductAction';

const initialState = {
  isLoading: false,
  isError: false,
  product: {},
  products: [],
  categoryProducts: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };
    }
    case GET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        categoryProducts: action.payload,
      };
    }
    case GET_PRODUCTS_BY_ID: {
      return {
        ...state,
        product: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
