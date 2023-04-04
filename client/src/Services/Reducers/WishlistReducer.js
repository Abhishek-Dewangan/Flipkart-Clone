import {
  ADD_TO_WISHLIST,
  IS_ERROR_IN_WISHLIST,
  GET_WISHLIST_PRODUCTS,
  REMOVE_ALL_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST,
  IS_LOADING_IN_WISHLIST,
  REFRESH_WISHLIST,
} from "../Actions/WishlistAction";

const initialState = {
  wishlistData: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: "",
};

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_WISHLIST: {
      return {
        ...state,
        isError: false,
        isLoading: true,
        isSuccess: false,
        message: "",
      };
    }
    case IS_ERROR_IN_WISHLIST: {
      return {
        ...state,
        isError: true,
        isLoading: false,
        isSuccess: false,
        message: action.payload.message,
      };
    }
    case GET_WISHLIST_PRODUCTS: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: false,
        message: "",
        wishlistData: action.payload.data,
      };
    }
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        message: action.payload.message,
        wishlistData: [...state.wishlistData, action.payload.data],
      };
    }
    case REMOVE_FROM_WISHLIST: {
      const updatedWishlistData = state.wishlistData.filter(
        (elem) => elem._id !== action.payload.data._id
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
    case REMOVE_ALL_FROM_WISHLIST: {
      return {
        ...state,
        isError: false,
        isLoading: false,
        isSuccess: true,
        message: action.payload.message,
        wishlistData: [],
      };
    }
    case REFRESH_WISHLIST: {
      return {
        wishlistData: [],
        isLoading: false,
        isError: false,
        isSuccess: false,
        message: "",
      };
    }
    default: {
      return state;
    }
  }
};
