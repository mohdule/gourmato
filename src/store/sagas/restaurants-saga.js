import { put, takeLatest, select } from 'redux-saga/effects';
import * as restaurantsModule from '../modules/restaurants';
import axios from '../../axios';

const normalizeResturants = (restaurants) => restaurants.map(({ restaurant }) => ({
  id: restaurant.id,
  name: restaurant.name,
  rating: restaurant.user_rating.aggregate_rating,
  highlights: restaurant.highlights,
  phone_numbers: restaurant.phone_numbers,
  address: restaurant.location.address,
  locality: restaurant.location.locality,
  locality_verbose: restaurant.location.locality_verbose,
  cuisines: restaurant.cuisines,
  thumb_url: restaurant.thumb,
  menu_url: restaurant.menu_url,
  photos_url: restaurant.photos_url,
  currency: restaurant.currency,
  average_cost_for_two: restaurant.average_cost_for_two,
  price_range: restaurant.price_range,
}));

function* searchByName({ payload }) {
  try {
    const {
      entity_id: entityId,
      entity_type: entityType,
    } = yield select((state) => state.location.current);
    const response = yield axios.get(`/search?entity_id=${entityId}&entity_type=${entityType}&q=${payload}`);
    const restaurantsFound = normalizeResturants(response.data.restaurants);
    const suggestions = restaurantsFound.map((restaurant) => ({
      title: restaurant.id,
      ...restaurant,
    }));
    yield put(restaurantsModule.foundRestaruantSearchResults(suggestions));
  } catch (error) {
    yield put(restaurantsModule.failedSearchingRestaurant('Unable to find restaurant'));
  }
}

function* findRestaurants({ payload }) {
  const {
    entityId, entityType, cuisinesIds, categoryIds,
  } = payload;
  const cuisinesIdsString = cuisinesIds.join(', ');
  const categoryIdsString = categoryIds.join(', ');
  try {
    const response = yield axios.get(
      `/search?entity_id=${entityId}&entity_type=${entityType}&cuisines=${cuisinesIdsString}&category=${categoryIdsString}`,
    );

    // Normalizing the restuarants list
    const restaurants = normalizeResturants(response.data.restaurants);
    yield put(restaurantsModule.loadedRestaurants(restaurants));
  } catch (error) {
    yield put(restaurantsModule.failedLoadingRestaurants('Unable to search for restaurants, try again'));
  }
}

export default function* () {
  yield takeLatest(restaurantsModule.TYPES.FIND_RESTAURANTS, findRestaurants);
  yield takeLatest(restaurantsModule.TYPES.SEARCH_FOR_RESTAURANT, searchByName);
}
