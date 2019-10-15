import { takeLatest, put } from 'redux-saga/effects';
import * as cuisinesModule from '../modules/cuisines';
import axios from '../../axios';

function* loadCuisinesSaga({ payload: cityId }) {
  try {
    const response = yield axios.get(`/cuisines?city_id=${cityId}`);
    const cuisines = response.data.cuisines.map((el) => ({
      id: el.cuisine.cuisine_id,
      name: el.cuisine.cuisine_name,
    }));
    yield put(cuisinesModule.loadedCuisines(cuisines));
  } catch (error) {
    yield put(cuisinesModule.failedLoadingCuisines('Unable to load cuisines'));
  }
}

export default function* () {
  yield takeLatest(cuisinesModule.TYPES.GET_CUISINES, loadCuisinesSaga);
}
