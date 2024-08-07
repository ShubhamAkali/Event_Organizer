import api from './index';

export const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};
