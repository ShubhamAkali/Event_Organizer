import api from './index';

export const fetchBookings = async () => {
  const response = await api.get('/bookings');
  return response.data;
};
