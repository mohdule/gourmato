// -------------|
// Action Types |
// -------------|
export const TYPES = {
  LOAD_LOCATION_SUGGESTIONS: 'App/location/LOAD_LOCATION_SUGGESTIONS',
  LOAD_LOCATION_SUGGESTIONS_SUCCESS: 'App/location/LOAD_LOCATION_SUGGESTIONS_SUCCESS',
  LOAD_LOCATION_SUGGESTIONS_FAILURE: 'App/location/LOAD_LOCATION_SUGGESTIONS_FAILURE',

  SET_LOCATION: 'App/location/SET_LOCATION',
  CHECK_FOR_CACHED_LOCATION: 'App/location/CHECK_FOR_CACHED_LOCATION',
  RESET_LOCATION: 'App/location/RESET_LOCATION',
};

// --------|
// Reducer |
// --------|
// => initial state
const initialState = {
  loading: false,
  error: '',
  current: {
    entity_type: '',
    entity_id: '',
    title: '',
    latitude: '',
    longitude: '',
    city_id: '',
    city_name: '',
    country_id: '',
    country_name: '',
  },
  suggestions: {
    loading: false,
    items: [],
  },
};
// => reducer function
export default function (state = initialState, { type, payload }) {
  switch (type) {
    case TYPES.CHECK_FOR_CACHED_LOCATION:
      return { ...state, loading: true };
    case TYPES.SET_LOCATION:
      return { ...state, current: payload, loading: false };
    case TYPES.LOAD_LOCATION_SUGGESTIONS:
      return {
        ...state,
        suggestions: {
          ...state.suggestions,
          loading: true,
        },
      };
    case TYPES.LOAD_LOCATION_SUGGESTIONS_SUCCESS:
      return {
        ...state,
        suggestions: {
          ...state.suggestions,
          loading: false,
          items: payload,
        },
      };
    case TYPES.LOAD_LOCATION_SUGGESTIONS_FAILURE:
      return {
        ...state,
        suggestions: {
          ...state.suggestions,
          loading: false,
          error: payload,
        },
      };
    case TYPES.RESET_LOCATION:
      return initialState;
    default:
      return state;
  }
}

// ----------------|
// Action Creators |
// ----------------|
export const setLocation = (locationData) => ({
  type: TYPES.SET_LOCATION,
  payload: locationData,
});

export const checkForCachedLocation = () => ({
  type: TYPES.CHECK_FOR_CACHED_LOCATION,
});

export const loadSuggestions = (payload) => ({
  type: TYPES.LOAD_LOCATION_SUGGESTIONS,
  payload,
});

export const suggestionsLoaded = (payload) => ({
  type: TYPES.LOAD_LOCATION_SUGGESTIONS_SUCCESS,
  payload,
});

export const failedLoadingSuggestions = (payload) => ({
  type: TYPES.LOAD_LOCATION_SUGGESTIONS_FAILURE,
  payload,
});

export const resetLocation = () => ({
  type: TYPES.RESET_LOCATION,
});
