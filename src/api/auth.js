import api from './index';

export const login = async (email, password) => {
  const response = await api.post('/auth/login', { email, password });
  return response.data;
};
export const registerUser = async (userData) => {
  const response = await api.post('/auth/register', userData);
  return response.data;
};

export const sendPasswordResetEmail = async (email) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : new Error('Network Error');
  }
};