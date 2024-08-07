import { MAKE_PAYMENT, GET_PAYMENTS } from '../constants/actionTypes';
import paymentService from '../../services/paymentService';

export const makePayment = (paymentData) => async (dispatch) => {
  try {
    const response = await paymentService.makePayment(paymentData);
    dispatch({ type: MAKE_PAYMENT, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const getPayments = () => async (dispatch) => {
  try {
    const response = await paymentService.getPayments();
    dispatch({ type: GET_PAYMENTS, payload: response });
  } catch (error) {
    console.error(error);
  }
};
