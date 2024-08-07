import { MAKE_PAYMENT, GET_PAYMENTS } from '../constants/actionTypes';

const initialState = {
  payments: [],
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PAYMENTS:
      return { ...state, payments: action.payload };
    case MAKE_PAYMENT:
      return { ...state, payments: [...state.payments, action.payload] };
    default:
      return state;
  }
};

export default paymentReducer;
