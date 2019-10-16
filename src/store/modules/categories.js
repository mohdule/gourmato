// -------------|
// Action Types |
// -------------|
export const TYPES = {
  GET_CATEGORIES: 'App/categories/GET_CATEGORIES',
  GET_CATEGORIES_SUCCESS: 'App/categories/GET_CATEGORIES_SUCCESS',
  GET_CATEGORIES_FAIL: 'App/categories/GET_CATEGORIES_FAIL',
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
    case TYPES.GET_CATEGORIES:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_CATEGORIES_SUCCESS:
      return {
        ...state,
        loading: false,
        all: payload,
      };
    case TYPES.GET_CATEGORIES_FAIL:
      return {
        ...state,
        loading: false,
        error: payload,
        all: [],
      };
    default:
      return state;
  }
}

// ----------------|
// Action Creators |
// ----------------|
export const loadCategories = () => ({
  type: TYPES.GET_CATEGORIES,
});

export const loadedCategories = (categories) => ({
  type: TYPES.GET_CATEGORIES_SUCCESS,
  payload: categories,
});

export const failedLoadingCategories = (errorMsg) => ({
  type: TYPES.GET_CATEGORIES_FAIL,
  payload: errorMsg,
});
