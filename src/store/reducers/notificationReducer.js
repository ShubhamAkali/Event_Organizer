import { GET_NOTIFICATIONS, ADD_NOTIFICATION, REMOVE_NOTIFICATION } from '../constants/actionTypes';

const initialState = {
  notifications: [],
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTIFICATIONS:
      return { ...state, notifications: action.payload };
    case ADD_NOTIFICATION:
      return { ...state, notifications: [...state.notifications, action.payload] };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((notification) => notification.id !== action.payload),
      };
    default:
      return state;
  }
};

export default notificationReducer;
