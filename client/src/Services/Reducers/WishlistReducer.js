import {
  ADD_TO_WISHLIST,
  IS_ERROR,
  GET_WISHLIST_PRODUCTS,
  REMOVE_ALL_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST,
  IS_LOADING,
} from '../Actions/WishlistAction';

const initialState = {
  wishlistData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        isSuccess: false,
        message: '',
      };
    }
    case IS_ERROR: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
        message: action.payload.message,
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.message,
        wishlistData: [...state.wishlistData, action.payload],
      };
    }
    case REMOVE_FROM_WISHLIST: {
      const updatedWishlistData = state.wishlistData.filter(
        (elem) => elem.id !== action.payload.id
      );
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
        wishlistData: updatedWishlistData,
      };
    }
    case GET_WISHLIST_PRODUCTS: {
      return {
        ...state,
        wishlistData: action.payload,
      };
    }
    case REMOVE_ALL_FROM_WISHLIST: {
      return {
        ...state,
        wishlistData: [],
      };
    }
    default: {
      return state;
    }
  }
};
