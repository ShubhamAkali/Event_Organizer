import {
    FORGOT_PASSWORD_REQUEST,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_FAILURE
  } from '../actions/forgotPasswordActions';
  
  const initialState = {
    success: false,
    loading: false,
    error: null
  };
  
  const forgotPasswordReducer = (state = initialState, action) => {
    switch (action.type) {
      case FORGOT_PASSWORD_REQUEST:
        return { ...state, loading: true };
      case FORGOT_PASSWORD_SUCCESS:
        return { ...state, loading: false, success: true };
      case FORGOT_PASSWORD_FAILURE:
        return { ...state, loading: false, error: action.error };
      default:
        return state;
    }
  };
  
  export default forgotPasswordReducer;
  