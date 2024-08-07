import {
    FETCH_SEMINARS_REQUEST,
    FETCH_SEMINARS_SUCCESS,
    FETCH_SEMINARS_FAILURE,
    FETCH_SEMINAR_REQUEST,
    FETCH_SEMINAR_SUCCESS,
    FETCH_SEMINAR_FAILURE,
    ADD_SEMINAR_REQUEST,
    ADD_SEMINAR_SUCCESS,
    ADD_SEMINAR_FAILURE,
    EDIT_SEMINAR_REQUEST,
    EDIT_SEMINAR_SUCCESS,
    EDIT_SEMINAR_FAILURE,
    REMOVE_SEMINAR_REQUEST,
    REMOVE_SEMINAR_SUCCESS,
    REMOVE_SEMINAR_FAILURE
  } from '../actions/seminarActions';
  
  const initialState = {
    seminars: [],
    seminar: null,
    loading: false,
    error: null
  };
  
  const seminarReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_SEMINARS_REQUEST:
        return { ...state, loading: true };
      case FETCH_SEMINARS_SUCCESS:
        return { ...state, loading: false, seminars: action.payload };
      case FETCH_SEMINARS_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      case FETCH_SEMINAR_REQUEST:
        return { ...state, loading: true };
      case FETCH_SEMINAR_SUCCESS:
        return { ...state, loading: false, seminar: action.payload };
      case FETCH_SEMINAR_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      case ADD_SEMINAR_REQUEST:
      case EDIT_SEMINAR_REQUEST:
      case REMOVE_SEMINAR_REQUEST:
        return { ...state, loading: true };
      case ADD_SEMINAR_SUCCESS:
        return { ...state, loading: false, seminars: [...state.seminars, action.payload] };
      case EDIT_SEMINAR_SUCCESS:
        return {
          ...state,
          loading: false,
          seminars: state.seminars.map(seminar =>
            seminar.id === action.payload.id ? action.payload : seminar
          )
        };
      case REMOVE_SEMINAR_SUCCESS:
        return {
          ...state,
          loading: false,
          seminars: state.seminars.filter(seminar => seminar.id !== action.payload)
        };
      case ADD_SEMINAR_FAILURE:
      case EDIT_SEMINAR_FAILURE:
      case REMOVE_SEMINAR_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default seminarReducer;
  