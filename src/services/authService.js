// src/services/authService.js
import { login, registerUser as registerApiUser } from '../api/auth';

export const loginService = async (email, password) => {
  try {
    const data = await login(email, password);
    return data;
  } catch (error) {
    throw error;
  }
};

export const registerService = async (userData) => {
  try {
    const data = await registerApiUser(userData);
    return data;
  } catch (error) {
    throw error;
  }
};
