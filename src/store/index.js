import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import eventReducer from './reducers/eventReducer';
import registrationReducer from './reducers/registrationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  registration: registrationReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
