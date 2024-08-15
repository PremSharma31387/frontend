import {
  GET_ORDER_REQUEST,
  GET_ORDER_SUCCESS,
  GET_ORDER_FAILURE,
  CONFIRMED_ORDER_REQUEST,
  CONFIRMED_ORDER_SUCCESS,
  CONFIRMED_ORDER_FAILURE,
  PLACED_ORDER_REQUEST,
  PLACED_ORDER_SUCCESS,
  PLACED_ORDER_FAILURE,
  DELIVERED_ORDER_REQUEST,
  DELIVERED_ORDER_SUCCESS,
  DELIVERED_ORDER_FAILURE,
  CANCELED_ORDER_REQUEST,
  CANCELED_ORDER_SUCCESS,
  CANCELED_ORDER_FAILURE,
  DELETE_ORDER_REQUEST,
  DELETE_ORDER_SUCCESS,
  DELETE_ORDER_FAILURE,
  SHIPPED_ORDER_REQUEST,
  SHIPPED_ORDER_SUCCESS,
  SHIPPED_ORDER_FAILURE,
} from "./ActionType";

const initialState = {
  orders: [],
  loading: false,
  error: null,
  confirmed: null,
  delivered: null,
  shipped: null,
};

export const adminOrderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER_REQUEST:
    case CONFIRMED_ORDER_REQUEST:
    case PLACED_ORDER_REQUEST:
    case DELIVERED_ORDER_REQUEST:
    case CANCELED_ORDER_REQUEST:
    case DELETE_ORDER_REQUEST:
    case SHIPPED_ORDER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case GET_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: action.payload,
      };

    // case CONFIRMED_ORDER_SUCCESS:
    // case PLACED_ORDER_SUCCESS:
    // case DELIVERED_ORDER_SUCCESS:
    // case CANCELED_ORDER_SUCCESS:
    // case SHIPPED_ORDER_SUCCESS:
    //   return {
    //     ...state,
    //     loading: false,
    //     orders: state.orders.map((order) =>
    //       order.id === action.payload.id ? action.payload : order
    //     ),
    //   };

    case CONFIRMED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        confirmed: action.payload,
      };
    case DELIVERED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        delivered: action.payload,
      };
    case SHIPPED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        shipped: action.payload,
      };
    case PLACED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        placed: action.payload,
      };
    case CANCELED_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        cancel: action.payload,
      };

    case DELETE_ORDER_SUCCESS:
      return {
        ...state,
        loading: false,
        // orders: state.orders.filter((order) => order.id !== action.payload),
        deletedOrder: action.payload,
      };

    case GET_ORDER_FAILURE:
    case CONFIRMED_ORDER_FAILURE:
    case PLACED_ORDER_FAILURE:
    case DELIVERED_ORDER_FAILURE:
    case CANCELED_ORDER_FAILURE:
    case DELETE_ORDER_FAILURE:
    case SHIPPED_ORDER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
