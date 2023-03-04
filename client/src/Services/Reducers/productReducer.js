import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  GET_PROUDUCT_DETAILS,
  IS_LOADING,
  IS_ERROR,
} from '../Actions/ProductAction';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  product: {},
  products: [],
  categoryProducts: [],
  productDetails: {},
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    }
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        products: action.payload.data,
      };
    }
    case GET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        categoryProducts: action.payload.data,
      };
    }
    case GET_PROUDUCT_DETAILS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        productDetails: action.payload,
      };
    }
    case GET_PRODUCTS_BY_ID: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        product: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
