import { GET_NOTIFICATIONS, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';
import notificationService from '../../services/notificationService';

export const getNotifications = () => async (dispatch) => {
  try {
    const response = await notificationService.getNotifications();
    dispatch({ type: GET_NOTIFICATIONS, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const addNotification = (notificationData) => async (dispatch) => {
  try {
    const response = await notificationService.addNotification(notificationData);
    dispatch({ type: ADD_NOTIFICATION, payload: response });
  } catch (error) {
    console.error(error);
  }
};

export const removeNotification = (notificationId) => async (dispatch) => {
  try {
    await notificationService.removeNotification(notificationId);
    dispatch({ type: REMOVE_NOTIFICATION, payload: notificationId });
  } catch (error) {
    console.error(error);
  }
};
