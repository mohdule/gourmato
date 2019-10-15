import React, { useCallback } from 'react';
import { Container, Header, Divider } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation, loadSuggestions } from '../store/modules/location';
import LocationSearch from '../components/Search/LocationSearch/LocationSearch';

const SetLocation = () => {
  // State Selectors
  const suggestions = useSelector((state) => state.location.suggestions.items);
  const suggestionsLoading = useSelector((state) => state.location.suggestions.loading);

  // Action Dispatchers
  const dispatch = useDispatch();
  const requestSuggestions = useCallback((query) => dispatch(loadSuggestions(query)), [dispatch]);
  const setFoundLocation = useCallback((location) => dispatch(setLocation(location)), [dispatch]);

  // Render return
  return (
    <Container text textAlign="center" id="welcomePageContainer" style={{ paddingTop: '100px' }}>
      <Header as="h1" content="Welcome to Gourmato" />
      <p>Tasty food is just one steps away</p>
      <Divider />
      <p>
        Please search and select your location below
      </p>
      <LocationSearch
        loading={suggestionsLoading}
        selectLocation={setFoundLocation}
        suggestions={suggestions}
        loadSuggestions={requestSuggestions}
      />
    </Container>
  );
};

export default SetLocation;
