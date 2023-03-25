import {
  IS_LOADING_IN_ORDER,
  IS_ERROR_IN_ORDER,
  ADD_ORDER,
  GET_ORDERS,
} from '../Actions/OrderAction';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  ordersData: [],
};

export const OrderReducer = (state = initialState, action) => {
    
};
