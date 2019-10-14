import { takeLatest, put } from 'redux-saga/effects';
import * as locationModule from '../modules/location';
import axios from '../../axios';

/**
 * @description this saga is responsible of setting the location
 */
function* setLocationSaga({ payload }) {
  yield localStorage.setItem('location-data', JSON.stringify(payload));
}

/**
 * @description this functino is responsible of checking
 * for previous cached locatino data
 */
function* checkForCachedLocationSaga() {
  const location = JSON.parse(localStorage.getItem('location-data'));
  if (location) {
    yield put(locationModule.setLocation(location));
  } else {
    yield put(locationModule.resetLocation());
  }
}

/**
 * @description this function is responsible of loading suggestions
 * using the Zomato api
 */
function* loadSuggestionsSaga({ payload: query }) {
  try {
    const response = yield axios.get(`/locations?query=${query}`);
    yield put(locationModule.suggestionsLoaded(response.data.location_suggestions));
  } catch (error) {
    yield put(locationModule.failedLoadingSuggestions('Unable to load suggestions'));
  }
}

// Root saga
export default function* () {
  yield takeLatest(locationModule.TYPES.LOAD_LOCATION_SUGGESTIONS, loadSuggestionsSaga);
  yield takeLatest(locationModule.TYPES.SET_LOCATION, setLocationSaga);
  yield takeLatest(locationModule.TYPES.CHECK_FOR_CACHED_LOCATION, checkForCachedLocationSaga);
}
