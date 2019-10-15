import React from 'react';
import { Search } from 'semantic-ui-react';

const RestaurantSearch = () => (
  <Search
    input={{ placeholder: 'Search a for restaurant...' }}
    fluid
  />
);

export default RestaurantSearch;
