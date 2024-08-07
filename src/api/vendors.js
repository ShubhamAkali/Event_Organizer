import api from './index';

export const fetchVendors = async () => {
  const response = await api.get('/vendors');
  return response.data;
};
