import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  GET_PROUDUCT_DETAILS,
  IS_LOADING,
  IS_ERROR,
} from '../Actions/ProductAction';

const initialState = {
  isLoading: false,
  isError: false,
  product: {},
  products: [],
  categoryProducts: [],
  productDetails: {},
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
    case GET_PROUDUCT_DETAILS: {
      return {
        ...state,
        productDetails: action.payload,
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
