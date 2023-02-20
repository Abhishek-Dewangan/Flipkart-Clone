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
  products: [],
  productsByCategory: [],
};

export const ProductReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: payload,
      };
    }
    default: {
      return state;
    }
  }
};
