// Import the necessary action types
import { api } from "../../../Config/Config";
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

// Async action creator for getting orders
export const getOrders = () => {
  return async (dispatch) => {
    dispatch({ type: GET_ORDER_REQUEST });
    try {
      const { data } = await api.get(`/api/admin/orders`);
      console.log("get all orders ", data);
      dispatch({ type: GET_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: GET_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for confirming orders
export const confirmOrder = (orderId) => {
  console.log("confirmed orderId", orderId);
  return async (dispatch) => {
    dispatch({ type: CONFIRMED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/orders/confirmed/${orderId}`);
      console.log("confirm order ", data);
      dispatch({ type: CONFIRMED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: CONFIRMED_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for placing orders
export const placeOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: PLACED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/orders/placed/${orderId}`);
      console.log("place order ", data);
      dispatch({ type: PLACED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: PLACED_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for delivering orders
export const deliverOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: DELIVERED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/orders/delivered/${orderId}`);
      console.log("deliver order ", data);
      dispatch({ type: DELIVERED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: DELIVERED_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for canceling orders
export const cancelOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: CANCELED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/orders/cancel/${orderId}`);
      console.log("cancel order ", data);
      dispatch({ type: CANCELED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: CANCELED_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for deleting orders
export const deleteOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: DELETE_ORDER_REQUEST });
    try {
      const { data } = await api.delete(`/api/admin/orders/delete/${orderId}`);
      console.log("delete order ", data);
      dispatch({ type: DELETE_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: DELETE_ORDER_FAILURE, payload: error.message });
    }
  };
};

// Async action creator for shipping orders
export const shipOrder = (orderId) => {
  return async (dispatch) => {
    dispatch({ type: SHIPPED_ORDER_REQUEST });
    try {
      const { data } = await api.put(`/api/admin/orders/shipped/${orderId}`);
      console.log("ship order ", data);
      dispatch({ type: SHIPPED_ORDER_SUCCESS, payload: data });
    } catch (error) {
      console.log("catch error ", error);
      dispatch({ type: SHIPPED_ORDER_FAILURE, payload: error.message });
    }
  };
};
