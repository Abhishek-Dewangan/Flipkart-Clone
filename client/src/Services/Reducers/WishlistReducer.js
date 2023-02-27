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
