import {
    getSeminars,
    getSeminar,
    addSeminar,
    editSeminar,
    removeSeminar
  } from '../../services/seminarService';
  
  export const FETCH_SEMINARS_REQUEST = 'FETCH_SEMINARS_REQUEST';
  export const FETCH_SEMINARS_SUCCESS = 'FETCH_SEMINARS_SUCCESS';
  export const FETCH_SEMINARS_FAILURE = 'FETCH_SEMINARS_FAILURE';
  
  export const fetchSeminars = () => async (dispatch) => {
    dispatch({ type: FETCH_SEMINARS_REQUEST });
    try {
      const seminars = await getSeminars();
      dispatch({ type: FETCH_SEMINARS_SUCCESS, payload: seminars });
    } catch (error) {
      dispatch({ type: FETCH_SEMINARS_FAILURE, error });
    }
  };
  
  export const FETCH_SEMINAR_REQUEST = 'FETCH_SEMINAR_REQUEST';
  export const FETCH_SEMINAR_SUCCESS = 'FETCH_SEMINAR_SUCCESS';
  export const FETCH_SEMINAR_FAILURE = 'FETCH_SEMINAR_FAILURE';
  
  export const fetchSeminar = (id) => async (dispatch) => {
    dispatch({ type: FETCH_SEMINAR_REQUEST });
    try {
      const seminar = await getSeminar(id);
      dispatch({ type: FETCH_SEMINAR_SUCCESS, payload: seminar });
    } catch (error) {
      dispatch({ type: FETCH_SEMINAR_FAILURE, error });
    }
  };
  
  export const ADD_SEMINAR_REQUEST = 'ADD_SEMINAR_REQUEST';
  export const ADD_SEMINAR_SUCCESS = 'ADD_SEMINAR_SUCCESS';
  export const ADD_SEMINAR_FAILURE = 'ADD_SEMINAR_FAILURE';
  
  export const addNewSeminar = (seminarData) => async (dispatch) => {
    dispatch({ type: ADD_SEMINAR_REQUEST });
    try {
      const newSeminar = await addSeminar(seminarData);
      dispatch({ type: ADD_SEMINAR_SUCCESS, payload: newSeminar });
    } catch (error) {
      dispatch({ type: ADD_SEMINAR_FAILURE, error });
    }
  };
  
  export const EDIT_SEMINAR_REQUEST = 'EDIT_SEMINAR_REQUEST';
  export const EDIT_SEMINAR_SUCCESS = 'EDIT_SEMINAR_SUCCESS';
  export const EDIT_SEMINAR_FAILURE = 'EDIT_SEMINAR_FAILURE';
  
  export const editExistingSeminar = (id, seminarData) => async (dispatch) => {
    dispatch({ type: EDIT_SEMINAR_REQUEST });
    try {
      const updatedSeminar = await editSeminar(id, seminarData);
      dispatch({ type: EDIT_SEMINAR_SUCCESS, payload: updatedSeminar });
    } catch (error) {
      dispatch({ type: EDIT_SEMINAR_FAILURE, error });
    }
  };
  
  export const REMOVE_SEMINAR_REQUEST = 'REMOVE_SEMINAR_REQUEST';
  export const REMOVE_SEMINAR_SUCCESS = 'REMOVE_SEMINAR_SUCCESS';
  export const REMOVE_SEMINAR_FAILURE = 'REMOVE_SEMINAR_FAILURE';
  
  export const removeExistingSeminar = (id) => async (dispatch) => {
    dispatch({ type: REMOVE_SEMINAR_REQUEST });
    try {
      await removeSeminar(id);
      dispatch({ type: REMOVE_SEMINAR_SUCCESS, payload: id });
    } catch (error) {
      dispatch({ type: REMOVE_SEMINAR_FAILURE, error });
    }
  };
  