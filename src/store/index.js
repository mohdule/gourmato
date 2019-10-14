import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './modules';
import rootSaga from './sagas';

// create saga middleware
const sagaMiddleware = createSagaMiddleware();

// create store
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

// run root saga
sagaMiddleware.run(rootSaga);

export default store;
