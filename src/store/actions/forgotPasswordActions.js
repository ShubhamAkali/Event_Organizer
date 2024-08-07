import { sendPasswordResetEmail } from '../../services/authService';

export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';

export const forgotPassword = (email) => async (dispatch) => {
  dispatch({ type: FORGOT_PASSWORD_REQUEST });
  try {
    await sendPasswordResetEmail(email);
    dispatch({ type: FORGOT_PASSWORD_SUCCESS });
  } catch (error) {
    dispatch({ type: FORGOT_PASSWORD_FAILURE, error });
  }
};
