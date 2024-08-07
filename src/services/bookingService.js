import { fetchBookings } from '../api/bookings';

export const fetchBookingsService = async () => {
  try {
    const bookings = await fetchBookings();
    return bookings;
  } catch (error) {
    throw error;
  }
};
