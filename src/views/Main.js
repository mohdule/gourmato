import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Container, Header, Loader, Divider,
} from 'semantic-ui-react';

import { loadSuggestions, setLocation } from '../store/modules/location';
import { loadRestaurants, searchForRestaurant } from '../store/modules/restaurants';
import { loadCategories } from '../store/modules/categories';
import { loadCuisines } from '../store/modules/cuisines';

import Navbar from '../components/Navbar/Navbar';
import Fab from '../components/Buttons/Fab/Fab';
import MainSearchBar from '../components/Search/MainSearchBar/MainSearchBar';
import RestaurantsList from '../components/Listing/RestaurantList';

const Main = () => {
  // ----------------|
  // State Selectors |
  // ----------------|
  // => Location
  const locationSuggestions = useSelector((state) => state.location.suggestions.items);
  const currentLocation = useSelector((state) => state.location.current);
  const locationSuggestionsLoading = useSelector((state) => state.location.suggestions.loading);

  // => Categories
  const categories = useSelector((state) => state.categories.all);
  const categoriesLoading = useSelector((state) => state.categories.loading);

  // => Cuisines
  const cuisines = useSelector((state) => state.cuisines.all);
  const cuisinesLoading = useSelector((state) => state.cuisines.loading);

  // => Restaurants
  // For search section based (1) on restaurant name
  const restaurantSeaarchLoading = useSelector((state) => state.restaurants.suggestions.loading);
  const restaurantsSuggestions = useSelector((state) => state.restaurants.suggestions.all);
  // ---
  // For search section based (2) on categoy & cuisine type
  const restaurants = useSelector((state) => state.restaurants.all);
  const restaurantsLoading = useSelector((state) => state.restaurants.loading);

  // -------------------|
  // Action Dispatchers |
  // -------------------|
  const dispatch = useDispatch();
  const loadLocationSuggestions = useCallback(
    (query) => dispatch(loadSuggestions(query)), [dispatch],
  );
  // => Location
  const setFoundLocation = useCallback((location) => dispatch(setLocation(location)), [dispatch]);
  // => Categories
  const loadAllCategories = useCallback(() => dispatch(loadCategories()), [dispatch]);
  // => Cuisine
  const loadAllCuisines = useCallback(() => dispatch(
    loadCuisines(currentLocation.entity_id),
  ),
  [currentLocation.entity_id, dispatch]);
  // => Restaurants
  // Search section #1 action
  const findRestaurantByName = useCallback(
    (name) => dispatch(searchForRestaurant(name)),
    [dispatch],
  );
  //---
  // Search section #2 action
  const findRestaurants = useCallback((categoryIds, cuisinesIds) => dispatch(
    loadRestaurants(
      categoryIds,
      cuisinesIds,
      currentLocation.entity_id,
      currentLocation.entity_type,
    ),
  ), [currentLocation.entity_id, currentLocation.entity_type, dispatch]);

  // --------|
  // Effects |
  // --------|
  useEffect(() => {
    loadAllCategories();
    loadAllCuisines();
  }, [loadAllCategories, loadAllCuisines]);

  // Props prepreation
  const searchProps = {
    location: {
      currentLocation,
      loading: locationSuggestionsLoading,
      suggestions: locationSuggestions,
      selectLocation: setFoundLocation,
      loadSuggestions: loadLocationSuggestions,
    },
    restaurant: {
      loading: restaurantSeaarchLoading,
      suggestions: restaurantsSuggestions,
      loadSuggestions: findRestaurantByName,
    },
  };

  // --------------|
  // Render Return |
  // --------------|
  return (
    <>
      <Navbar
        locationSearchProps={searchProps.location}
        restaurantSearchProps={searchProps.restaurant}
      />
      <br />
      <Container id="mainContainer">
        <Header content={`Find the best restaurants, cafés, and bars in ${currentLocation.country_name}`} />
        {cuisinesLoading || categoriesLoading
          ? <Loader active content="Please wait..." />
          : (
            <>
              <MainSearchBar
                categories={categories}
                cuisines={cuisines}
                search={findRestaurants}
              />
              <Divider />
              <RestaurantsList restaurants={restaurants} loading={restaurantsLoading} />
              <Fab circular />
            </>
          )}
      </Container>
    </>
  );
};

export default Main;
