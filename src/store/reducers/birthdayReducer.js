import {
    FETCH_BIRTHDAYS_REQUEST,
    FETCH_BIRTHDAYS_SUCCESS,
    FETCH_BIRTHDAYS_FAILURE,
    FETCH_BIRTHDAY_REQUEST,
    FETCH_BIRTHDAY_SUCCESS,
    FETCH_BIRTHDAY_FAILURE,
    ADD_BIRTHDAY_REQUEST,
    ADD_BIRTHDAY_SUCCESS,
    ADD_BIRTHDAY_FAILURE,
    EDIT_BIRTHDAY_REQUEST,
    EDIT_BIRTHDAY_SUCCESS,
    EDIT_BIRTHDAY_FAILURE,
    REMOVE_BIRTHDAY_REQUEST,
    REMOVE_BIRTHDAY_SUCCESS,
    REMOVE_BIRTHDAY_FAILURE
  } from '../actions/birthdayActions';
  
  const initialState = {
    birthdays: [],
    birthday: null,
    loading: false,
    error: null
  };
  
  const birthdayReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_BIRTHDAYS_REQUEST:
        return { ...state, loading: true };
      case FETCH_BIRTHDAYS_SUCCESS:
        return { ...state, loading: false, birthdays: action.payload };
      case FETCH_BIRTHDAYS_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      case FETCH_BIRTHDAY_REQUEST:
        return { ...state, loading: true };
      case FETCH_BIRTHDAY_SUCCESS:
        return { ...state, loading: false, birthday: action.payload };
      case FETCH_BIRTHDAY_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      case ADD_BIRTHDAY_REQUEST:
      case EDIT_BIRTHDAY_REQUEST:
      case REMOVE_BIRTHDAY_REQUEST:
        return { ...state, loading: true };
      case ADD_BIRTHDAY_SUCCESS:
        return { ...state, loading: false, birthdays: [...state.birthdays, action.payload] };
      case EDIT_BIRTHDAY_SUCCESS:
        return {
          ...state,
          loading: false,
          birthdays: state.birthdays.map(birthday =>
            birthday.id === action.payload.id ? action.payload : birthday
          )
        };
      case REMOVE_BIRTHDAY_SUCCESS:
        return {
          ...state,
          loading: false,
          birthdays: state.birthdays.filter(birthday => birthday.id !== action.payload)
        };
      case ADD_BIRTHDAY_FAILURE:
      case EDIT_BIRTHDAY_FAILURE:
      case REMOVE_BIRTHDAY_FAILURE:
        return { ...state, loading: false, error: action.error };
  
      default:
        return state;
    }
  };
  
  export default birthdayReducer;
  