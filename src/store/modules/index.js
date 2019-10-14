import { combineReducers } from 'redux';
import location from './location';

// The root reducer
const rootReducer = combineReducers({
  location,
});

export default rootReducer;
