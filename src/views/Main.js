import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Header } from 'semantic-ui-react';

import { loadSuggestions, setLocation } from '../store/modules/location';

import Navbar from '../components/Navbar/Navbar';

const Main = () => {
  // State Selectors
  const locationSuggestions = useSelector((state) => state.location.suggestions.items);
  const locationSuggestionsLoading = useSelector((state) => state.location.suggestions.loading);

  // Action Dispatchers
  const dispatch = useDispatch();
  const loadLocationSuggestions = useCallback(
    (query) => dispatch(loadSuggestions(query)), [dispatch],
  );
  const setFoundLocation = useCallback((location) => dispatch(setLocation(location)), [dispatch]);

  // Props prepreation
  const searchProps = {
    location: {
      loading: locationSuggestionsLoading || false,
      suggestions: locationSuggestions,
      selectLocation: setFoundLocation,
      loadSuggestions: loadLocationSuggestions,
    },
  };

  return (
    <>
      <Navbar locationSearchProps={searchProps.location} />
      <br />
      <Container>
        <Header as="h1" content="Discover New Tastes" />
        {/* <FullSearch /> */}
      </Container>
    </>
  );
};

export default Main;
