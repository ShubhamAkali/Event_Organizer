import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import eventReducer from './reducers/eventReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
