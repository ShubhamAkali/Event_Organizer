import api from './index';

export const fetchNotifications = async () => {
  const response = await api.get('/notifications');
  return response.data;
};
