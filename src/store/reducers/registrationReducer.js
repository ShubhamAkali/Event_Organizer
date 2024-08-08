// src/store/reducers/registrationReducer.js
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/registrationActions';

const initialState = {
  user: null,
  loading: false,
  error: null
};

const registrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_REQUEST:
      return { ...state, loading: true };
    case REGISTER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case REGISTER_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};

export default registrationReducer;
