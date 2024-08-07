import { fetchNotifications } from '../api/notifications';

export const fetchNotificationsService = async () => {
  try {
    const notifications = await fetchNotifications();
    return notifications;
  } catch (error) {
    throw error;
  }
};
