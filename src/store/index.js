import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import eventReducer from './reducers/eventReducer';
import { authReducer, registrationReducer, forgotPasswordReducer } from './reducers/authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  events: eventReducer,
  registration: registrationReducer,
  forgotPassword: forgotPasswordReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
