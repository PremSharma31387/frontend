import { api } from "../../Config/Config";
import {
  CREATE_PAYMENT_REQUEST,
  CREATE_PAYMENT_SUCCESS,
  CREATE_PAYMENT_FAILURE,
  UPDATE_PAYMENT_REQUEST,
  UPDATE_PAYMENT_SUCCESS,
  UPDATE_PAYMENT_FAILURE,
} from "./ActionType"; // Adjust the import path as necessary

// Create Payment
export const createPayment = (orderId) => async (dispatch) => {
  dispatch({ type: CREATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.post(`/api/payments/create/${orderId}`); // Adjust the API endpoint as necessary
    console.log("Payment data", data);
    //   dispatch({ type: CREATE_PAYMENT_SUCCESS, payload: response.data });
    if (data.paymentLinkUrl) {
      window.location.href = data.paymentLinkUrl;
    }
  } catch (error) {
    dispatch({ type: CREATE_PAYMENT_FAILURE, payload: error.message });
  }
};

// Update Payment
export const updatePayment = (paymentData) => async (dispatch) => {
  console.log(paymentData, "dddddddddddd");
  dispatch({ type: UPDATE_PAYMENT_REQUEST });
  try {
    const { data } = await api.get(
      `/api/payments?payment_id=${paymentData.paymentId}&order_id=${paymentData.orderId}`
    ); // Adjust the API endpoint as necessary
    //   dispatch({ type: UPDATE_PAYMENT_SUCCESS, payload: response.data });
    console.log("data", data);
  } catch (error) {
    dispatch({ type: UPDATE_PAYMENT_FAILURE, payload: error.message });
  }
};
