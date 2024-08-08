// src/store/actions/registrationActions.js
import { registerService } from '../../services/authService';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

export const register = (userData) => async (dispatch) => {
  dispatch({ type: REGISTER_REQUEST });
  try {
    const user = await registerService(userData);
    dispatch({ type: REGISTER_SUCCESS, payload: user });
  } catch (error) {
    dispatch({ type: REGISTER_FAILURE, error: error.message }); // Extract the error message
  }
};
