import {
  IS_LOADING_IN_ORDER,
  IS_ERROR_IN_ORDER,
  ADD_ORDER,
  GET_ORDERS,
  REFRESH_ORDER,
} from "../Actions/OrderAction";

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
    case IS_ERROR_IN_ORDER: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
      };
    }
    case ADD_ORDER: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ordersData: [...action.payload.data, ...state.ordersData],
      };
    }
    case GET_ORDERS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        ordersData: action.payload.data.reverse(),
      };
    }
    case REFRESH_ORDER: {
      return {
        isLoading: false,
        isError: false,
        isSuccess: false,
        ordersData: [],
      };
    }
    default: {
      return state;
    }
  }
};
