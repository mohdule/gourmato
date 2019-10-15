import { put, takeLatest } from 'redux-saga/effects';
import * as restaurantsModule from '../modules/restaurants';
import axios from '../../axios';

function* findRestaurant({ payload }) {
  const {
    entityId, entityType, cuisinesIds, categoryIds,
  } = payload;
  const cuisinesIdsString = cuisinesIds.join(', ');
  const categoryIdsString = categoryIds.join(', ');
  try {
    const response = yield axios.get(
      `/search?entity_id=${entityId}&entity_type=${entityType}&cuisines=${cuisinesIdsString}&category=${categoryIdsString}`,
    );

    const restaurants = response.data.restaurants.map(({ restaurant }) => ({
      id: restaurant.id,
      name: restaurant.name,
      rating: restaurant.user_rating.aggregate_rating,
      highlights: restaurant.highlights,
      phoneNumbers: restaurant.phone_numbers,
      address: restaurant.location.address,
      locality: restaurant.location.locality,
      cuisines: restaurant.cuisines,
      thumb_url: restaurant.thumb,
    }));
    yield put(restaurantsModule.loadedRestaurants(restaurants));
  } catch (error) {
    yield put(restaurantsModule.failedLoadingRestaurants('Unable to search for restaurants, try again'));
  }
}

export default function* () {
  yield takeLatest(restaurantsModule.TYPES.FIND_RESTAURANTS, findRestaurant);
}
