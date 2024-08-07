import { login } from '../api/auth';

export const loginService = async (email, password) => {
  try {
    const data = await login(email, password);
    // Handle login data
    return data;
  } catch (error) {
    // Handle error
    throw error;
  }
};
