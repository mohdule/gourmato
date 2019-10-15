import { combineReducers } from 'redux';
import location from './location';
import categories from './categories';
import cuisines from './cuisines';
import restaurants from './restaurants';

// The root reducer
const rootReducer = combineReducers({
  location,
  categories,
  cuisines,
  restaurants,
});

export default rootReducer;
