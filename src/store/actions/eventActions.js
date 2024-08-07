import { FETCH_EVENTS_REQUEST, FETCH_EVENTS_SUCCESS, FETCH_EVENTS_FAILURE } from '../actionTypes';
import { fetchEventsService } from '../../services/eventService';

export const fetchEvents = () => async (dispatch) => {
  dispatch({ type: FETCH_EVENTS_REQUEST });
  try {
    const events = await fetchEventsService();
    dispatch({ type: FETCH_EVENTS_SUCCESS, payload: events });
  } catch (error) {
    dispatch({ type: FETCH_EVENTS_FAILURE, payload: error.message });
  }
};
