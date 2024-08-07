import { fetchEvents } from '../api/events';

export const fetchEventsService = async () => {
  try {
    const events = await fetchEvents();
    return events;
  } catch (error) {
    throw error;
  }
};
