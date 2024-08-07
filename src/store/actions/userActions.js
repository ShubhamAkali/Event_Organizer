import { GET_USERS, UPDATE_USER, DELETE_USER } from '../constants/actionTypes';
import userService from '../../services/userService';

export const getUsers = () => async (dispatch) => {
  try {
    const response = await userService.getUsers();
    dispatch({ type: GET_USERS, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const updateUser = (userId, userData) => async (dispatch) => {
  try {
    const response = await userService.updateUser(userId, userData);
    dispatch({ type: UPDATE_USER, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const deleteUser = (userId) => async (dispatch) => {
  try {
    await userService.deleteUser(userId);
    dispatch({ type: DELETE_USER, payload: userId });
  } catch (error) {
    console.error(error);
  }
};
