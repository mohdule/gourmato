// -------------|
// Action Types |
// -------------|
export const TYPES = {
  GET_CUISINES: 'App/cuisines/GET_CUISINES',
  GET_CUISINES_SUCCESS: 'App/cuisines/GET_CUISINES_SUCCESS',
  GET_CUISINES_FAIL: 'App/cuisines/GET_CUISINES_FAIL',
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
    case TYPES.GET_CUISINES:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_CUISINES_SUCCESS:
      return {
        ...state,
        loading: false,
        all: payload,
      };
    case TYPES.GET_CUISINES_FAIL:
      return {
        ...state,
        loading: false,
        error: '',
        all: [],
      };
    default:
      return state;
  }
}

// ----------------|
// Action Creators |
// ----------------|
export const loadCuisines = (cityId) => ({
  type: TYPES.GET_CUISINES,
  payload: cityId,
});

export const loadedCuisines = (cuisines) => ({
  type: TYPES.GET_CUISINES_SUCCESS,
  payload: cuisines,
});

export const failedLoadingCuisines = (errorMsg) => ({
  type: TYPES.GET_CUISINES_FAIL,
  payload: errorMsg,
});
