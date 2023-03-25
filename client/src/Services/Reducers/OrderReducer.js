import {
  IS_LOADING_IN_ORDER,
  IS_ERROR_IN_ORDER,
  ADD_ORDER,
  GET_ORDERS,
  REFRESH_ORDER,
} from '../Actions/OrderAction';

const initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  ordersData: [],
};

export const OrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case IS_LOADING_IN_ORDER: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    }

    default: {
      return state;
    }
  }
};
