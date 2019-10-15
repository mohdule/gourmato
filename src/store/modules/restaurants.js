import { TYPES as LocationActions } from './location';
// -------------|
// Action Types |
// -------------|
export const TYPES = {
  FIND_RESTAURANTS: 'App/restaurants/FIND_RESTAURANTS',
  FOUND_RESTAURANTS: 'App/restaurants/FOUND_RESTAURANTS',
  FIND_RESTAURANTS_FAIL: 'App/restaurants/FIND_RESTAURANTS_FAIL',
};

// --------|
// Reducer |
// --------|
// => inital state
const initialState = {
  loading: false,
  error: '',
  all: [],
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
    case LocationActions.SET_LOCATION:
      return initialState;
    default:
      return state;
  }
}

// ----------------|
// Action Creators |
// ----------------|
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
