import { takeLatest, put } from 'redux-saga/effects';
import * as categoriesModule from '../modules/categories';
import axios from '../../axios';

function* loadCategoriesSaga() {
  try {
    const response = yield axios.get('/categories');
    const categories = response.data.categories.map((cat) => ({
      id: cat.categories.id,
      name: cat.categories.name,
    }));
    yield put(categoriesModule.loadedCategories(categories));
  } catch (error) {
    yield put(categoriesModule.failedLoadingCategories('Unable to load categories'));
  }
}

export default function* () {
  yield takeLatest(categoriesModule.TYPES.GET_CATEGORIES, loadCategoriesSaga);
}
