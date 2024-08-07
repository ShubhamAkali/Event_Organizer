import {
    getBirthdays,
    getBirthday,
    addBirthday,
    editBirthday,
    removeBirthday
  } from '../../services/birthdayService';
  
  export const FETCH_BIRTHDAYS_REQUEST = 'FETCH_BIRTHDAYS_REQUEST';
  export const FETCH_BIRTHDAYS_SUCCESS = 'FETCH_BIRTHDAYS_SUCCESS';
  export const FETCH_BIRTHDAYS_FAILURE = 'FETCH_BIRTHDAYS_FAILURE';
  
  export const fetchBirthdays = () => async (dispatch) => {
    dispatch({ type: FETCH_BIRTHDAYS_REQUEST });
    try {
      const birthdays = await getBirthdays();
      dispatch({ type: FETCH_BIRTHDAYS_SUCCESS, payload: birthdays });
    } catch (error) {
      dispatch({ type: FETCH_BIRTHDAYS_FAILURE, error });
    }
  };
  
  export const FETCH_BIRTHDAY_REQUEST = 'FETCH_BIRTHDAY_REQUEST';
  export const FETCH_BIRTHDAY_SUCCESS = 'FETCH_BIRTHDAY_SUCCESS';
  export const FETCH_BIRTHDAY_FAILURE = 'FETCH_BIRTHDAY_FAILURE';
  
  export const fetchBirthday = (id) => async (dispatch) => {
    dispatch({ type: FETCH_BIRTHDAY_REQUEST });
    try {
      const birthday = await getBirthday(id);
      dispatch({ type: FETCH_BIRTHDAY_SUCCESS, payload: birthday });
    } catch (error) {
      dispatch({ type: FETCH_BIRTHDAY_FAILURE, error });
    }
  };
  
  export const ADD_BIRTHDAY_REQUEST = 'ADD_BIRTHDAY_REQUEST';
  export const ADD_BIRTHDAY_SUCCESS = 'ADD_BIRTHDAY_SUCCESS';
  export const ADD_BIRTHDAY_FAILURE = 'ADD_BIRTHDAY_FAILURE';
  
  export const addNewBirthday = (birthdayData) => async (dispatch) => {
    dispatch({ type: ADD_BIRTHDAY_REQUEST });
    try {
      const newBirthday = await addBirthday(birthdayData);
      dispatch({ type: ADD_BIRTHDAY_SUCCESS, payload: newBirthday });
    } catch (error) {
      dispatch({ type: ADD_BIRTHDAY_FAILURE, error });
    }
  };
  
  export const EDIT_BIRTHDAY_REQUEST = 'EDIT_BIRTHDAY_REQUEST';
  export const EDIT_BIRTHDAY_SUCCESS = 'EDIT_BIRTHDAY_SUCCESS';
  export const EDIT_BIRTHDAY_FAILURE = 'EDIT_BIRTHDAY_FAILURE';
  
  export const editExistingBirthday = (id, birthdayData) => async (dispatch) => {
    dispatch({ type: EDIT_BIRTHDAY_REQUEST });
    try {
      const updatedBirthday = await editBirthday(id, birthdayData);
      dispatch({ type: EDIT_BIRTHDAY_SUCCESS, payload: updatedBirthday });
    } catch (error) {
      dispatch({ type: EDIT_BIRTHDAY_FAILURE, error });
    }
  };
  
  export const REMOVE_BIRTHDAY_REQUEST = 'REMOVE_BIRTHDAY_REQUEST';
  export const REMOVE_BIRTHDAY_SUCCESS = 'REMOVE_BIRTHDAY_SUCCESS';
  export const REMOVE_BIRTHDAY_FAILURE = 'REMOVE_BIRTHDAY_FAILURE';
  
  export const removeExistingBirthday = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_BIRTHDAY_REQUEST });
    try {
      await removeBirthday(id);
      dispatch({ type: REMOVE_BIRTHDAY_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: REMOVE_BIRTHDAY_FAILURE, error });
    }
  };
  