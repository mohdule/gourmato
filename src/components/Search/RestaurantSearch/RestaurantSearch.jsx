import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Search } from 'semantic-ui-react';
import RestaurantModal from '../../Modals/RestaurantModal/RestaurantModal';
import RestaurantSegment from '../../Segments/RestaurantSegment';

const customRender = (item) => (
  <RestaurantModal
    key={item.title}
    restaurant={item}
    trigger={<RestaurantSegment restaurant={item} />}
  />
);

const RestaurantSearch = ({
  loadSuggestions, loading, suggestions,
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
  const handleResultSelect = () => {
    setInputValue('');
  };

  // Render return
  return (
    <Search
      className="scrollableResults"
      loading={loading}
      input={{ placeholder: 'Search...', iconPosition: 'left' }}
      value={inputValue}
      onSearchChange={_.debounce(handleSearchChange, 500, {
        leading: true,
      })}
      results={suggestions}
      onResultSelect={handleResultSelect}
      resultRenderer={customRender}
    />
  );
};

RestaurantSearch.propTypes = {
  loading: PropTypes.bool.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadSuggestions: PropTypes.func.isRequired,
};

export default RestaurantSearch;
