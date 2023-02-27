import {
  ADD_TO_WISHLIST,
  ERROR,
  GET_WISHLIST_PRODUCTS,
  REMOVE_ALL_FROM_WISHLIST,
  REMOVE_FROM_WISHLIST,
} from '../Actions/WishlistAction';

const initialState = {
  wishlistData: [],
  isLoading: false,
  isError: false,
};

export const WishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST: {
      return {
        ...state,
        wishlistData: [...state.wishlistData, action.payload],
      };
    }
    case REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        wishlistData: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
