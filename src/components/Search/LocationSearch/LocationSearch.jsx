import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';

const LocationSearch = ({
  loading, suggestions, selectLocation, loadSuggestions,
}) => {
  // Localstate
  const [inputValue, setInputValue] = useState('');


  // Effects
  useEffect(() => {
    if (inputValue.length > 1) {
      loadSuggestions(inputValue);
    }
  }, [inputValue, loadSuggestions]);

  // Handlers
  const handleSearchChange = (e, { value }) => { setInputValue(value); };
  const handleResultSelect = (e, { result }) => { selectLocation(result); };

  // Render return
  return (
    <Search
      loading={loading}
      input={{ fluid: true, placeholder: 'Search...', iconPosition: 'left' }}
      value={inputValue}
      onSearchChange={_.debounce(handleSearchChange, 500, {
        leading: true,
      })}
      results={suggestions}
      onResultSelect={handleResultSelect}
      fluid
    />
  );
};

LocationSearch.propTypes = {
  loading: PropTypes.bool.isRequired,
  selectLocation: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadSuggestions: PropTypes.func.isRequired,
};

export default LocationSearch;
