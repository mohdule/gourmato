import { TYPES as LocationActions } from './location';
// -------------|
// Action Types |
// -------------|
export const TYPES = {
  FIND_RESTAURANTS: 'App/restaurants/FIND_RESTAURANTS',
  FOUND_RESTAURANTS: 'App/restaurants/FOUND_RESTAURANTS',
  FIND_RESTAURANTS_FAIL: 'App/restaurants/FIND_RESTAURANTS_FAIL',

  SEARCH_FOR_RESTAURANT: 'App/restaurants/SEARCH_FOR_RESTAURANT',
  SEARCH_FOR_RESTAURANT_FAIL: 'App/restaurants/SEARCH_FOR_RESTAURANT_FAIL',
  SEARCH_FOR_RESTAURANT_SUCCESS: 'App/restaurants/SEARCH_FOR_RESTAURANT_SUCCESS',
};

// --------|
// Reducer |
// --------|
// => inital state
const initialState = {
  loading: false,
  error: '',
  all: [],
  suggestions: {
    loading: false,
    error: '',
    all: [],
  },
};
// => reducer
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.FIND_RESTAURANTS:
      return {
        ...state,
        loading: true,
      };
    case TYPES.FOUND_RESTAURANTS:
      return {
        ...state,
        loading: false,
        all: payload,
      };
    case TYPES.FIND_RESTAURANTS_FAIL:
      return {
        ...state,
        loading: false,
        error: '',
        all: [],
      };
    case TYPES.SEARCH_FOR_RESTAURANT:
      return {
        ...state,
        suggestions: {
          loading: true,
          error: '',
          all: [],
        },
      };
    case TYPES.SEARCH_FOR_RESTAURANT_SUCCESS:
      return {
        ...state,
        suggestions: {
          loading: false,
          all: payload,
          error: '',
        },
      };
    case TYPES.SEARCH_FOR_RESTAURANT_FAIL:
      return {
        ...state,
        suggestions: {
          loading: false,
          all: [],
          error: payload,
        },
      };
    case LocationActions.SET_LOCATION:
      return initialState;
    default:
      return state;
  }
}

// ----------------|
// Action Creators |
// ----------------|
// Search section #1 action creators
export const searchForRestaurant = (name) => ({
  type: TYPES.SEARCH_FOR_RESTAURANT,
  payload: name,
});

export const foundRestaruantSearchResults = (restaurants) => ({
  type: TYPES.SEARCH_FOR_RESTAURANT_SUCCESS,
  payload: restaurants,
});

export const failedSearchingRestaurant = (errorMsg) => ({
  type: TYPES.SEARCH_FOR_RESTAURANT_FAIL,
  payload: errorMsg,
});

// Search section #2 action creators
export const loadRestaurants = (categoryIds, cuisinesIds, entityId, entityType) => ({
  type: TYPES.FIND_RESTAURANTS,
  payload: {
    categoryIds, cuisinesIds, entityId, entityType,
  },
});

export const loadedRestaurants = (restaurants) => ({
  type: TYPES.FOUND_RESTAURANTS,
  payload: restaurants,
});

export const failedLoadingRestaurants = (errorMsg) => ({
  type: TYPES.FIND_RESTAURANTS_FAIL,
  payload: errorMsg,
});