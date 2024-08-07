import { CREATE_BOOKING, GET_BOOKINGS, UPDATE_BOOKING, DELETE_BOOKING } from '../constants/actionTypes';
import bookingService from '../../services/bookingService';

export const createBooking = (bookingData) => async (dispatch) => {
  try {
    const response = await bookingService.createBooking(bookingData);
    dispatch({ type: CREATE_BOOKING, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const getBookings = () => async (dispatch) => {
  try {
    const response = await bookingService.getBookings();
    dispatch({ type: GET_BOOKINGS, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const updateBooking = (bookingId, bookingData) => async (dispatch) => {
  try {
    const response = await bookingService.updateBooking(bookingId, bookingData);
    dispatch({ type: UPDATE_BOOKING, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deleteBooking = (bookingId) => async (dispatch) => {
  try {
    await bookingService.deleteBooking(bookingId);
    dispatch({ type: DELETE_BOOKING, payload: bookingId });
  } catch (error) {
    console.error(error);
  }
};
