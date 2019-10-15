import { fork, all } from 'redux-saga/effects';
import locationSaga from './location-saga';
import categoriesSaga from './categories-saga';
import cuisinesSaga from './cuisines-saga';
import restaurantsSaga from './restaurants-saga';

export default function* rootSaga() {
  yield all([
    fork(locationSaga),
    fork(categoriesSaga),
    fork(cuisinesSaga),
    fork(restaurantsSaga),
  ]);
}
