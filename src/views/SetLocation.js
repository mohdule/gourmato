import _ from 'lodash';
import React, { useEffect, useState, useCallback } from 'react';
import { Container, Search } from 'semantic-ui-react';
import { useDispatch, useSelector } from 'react-redux';

import { setLocation, loadSuggestions } from '../store/modules/location';

const SetLocation = () => {
  // Local State
  const [inputValue, setInputValue] = useState('');

  // State Selectors
  const suggestions = useSelector((state) => state.location.suggestions.items);
  const suggestionsLoading = useSelector((state) => state.location.suggestions.loading);

  // Action Dispatchers
  const dispatch = useDispatch();
  const requestSuggestions = useCallback((query) => dispatch(loadSuggestions(query)), [dispatch]);
  const setFoundLocation = useCallback((location) => dispatch(setLocation(location)), [dispatch]);

  // Effects
  useEffect(() => {
    if (inputValue.length > 1) {
      requestSuggestions(inputValue);
    }
  }, [inputValue, requestSuggestions]);

  // Handlers
  const handleSearchChange = (e, { value }) => setInputValue(value);
  const handleResultSelect = (e, { result }) => {
    setFoundLocation(result);
  };

  // Render return
  return (
    <Container>
      <Search
        loading={suggestionsLoading}
        input={{ iconPosition: 'left' }}
        onSearchChange={_.debounce(handleSearchChange, 500, {
          leading: true,
        })}
        results={suggestions}
        onResultSelect={handleResultSelect}
        value={inputValue}
      />
    </Container>
  );
};

export default SetLocation;
