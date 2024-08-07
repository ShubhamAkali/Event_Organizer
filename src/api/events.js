import api from './index';

export const fetchEvents = async () => {
  const response = await api.get('/events');
  return response.data;
};
