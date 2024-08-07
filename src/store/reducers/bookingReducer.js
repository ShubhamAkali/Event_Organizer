import { CREATE_BOOKING, GET_BOOKINGS, UPDATE_BOOKING, DELETE_BOOKING } from '../constants/actionTypes';

const initialState = {
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKINGS:
      return { ...state, bookings: action.payload };
    case CREATE_BOOKING:
      return { ...state, bookings: [...state.bookings, action.payload] };
    case UPDATE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking.id === action.payload.id ? action.payload : booking
        ),
      };
    case DELETE_BOOKING:
      return {
        ...state,
        bookings: state.bookings.filter((booking) => booking.id !== action.payload),
      };
    default:
      return state;
  }
};

export default bookingReducer;
