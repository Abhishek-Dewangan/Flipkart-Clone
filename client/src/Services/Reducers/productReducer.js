import {
  GET_PRODUCTS,
  GET_PRODUCTS_BY_CATEGORY,
  GET_PRODUCTS_BY_ID,
  GET_PRODUCT_DETAILS,
  IS_LOADING_IN_PRODUCT,
  IS_ERROR_IN_PRODUCT,
  GET_TOP_OFFER_PRODUCTS,
  GET_PRODUCTS_ON_SEARCH,
} from '../Actions/ProductAction';

const initialState = {
  isError: false,
  isLoading: false,
  isSuccess: false,
  product: {},
  products: [],
  categoryProducts: [],
  offerProducts: [],
  productDetails: {},
  searchProducts: [],
};

export const ProductReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_PRODUCT: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
        categoryProducts: [],
        offerProducts: [],
        searchProducts: [],
      };
    }
    case IS_ERROR_IN_PRODUCT: {
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
    case GET_PRODUCTS_ON_SEARCH: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        searchProducts: action.payload,
      };
    }
    case GET_PRODUCTS_BY_CATEGORY: {
      return {
        ...state,
        categoryProducts: action.payload.data,
        isLoading: false,
        isError: false,
        isSuccess: true,
      };
    }
    case GET_TOP_OFFER_PRODUCTS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        offerProducts: action.payload.data,
      };
    }
    case GET_PRODUCT_DETAILS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        productDetails: action.payload.data,
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
      return {...state, isLoading: false};
    }
  }
};
