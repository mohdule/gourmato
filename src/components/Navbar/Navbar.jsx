import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';
import ChangeLocationModal from '../Modals/ChangeLocationModal/ChangeLocationModal';

import './navbar.css';
import RestaurantSearch from '../Search/RestaurantSearch/RestaurantSearch';

const Navbar = ({ locationSearchProps, restaurantSearchProps }) => (
  <Menu id="navbar" borderless inverted fixed="top">
    <Container>
      <Menu.Item>
        <RestaurantSearch
          suggestions={restaurantSearchProps.suggestions}
          loading={restaurantSearchProps.loading}
          loadSuggestions={restaurantSearchProps.loadSuggestions}
        />
      </Menu.Item>
      <Menu.Item position="right">
        <ChangeLocationModal locationSearchProps={locationSearchProps} />
      </Menu.Item>
    </Container>
  </Menu>
);

Navbar.propTypes = {
  locationSearchProps: PropTypes.shape({
    currentLocation: PropTypes.shape({
      entity_type: PropTypes.string,
      entity_id: PropTypes.number,
      title: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      city_id: PropTypes.number,
      city_name: PropTypes.string,
      country_id: PropTypes.number,
      country_name: PropTypes.string,
    }),
    loading: PropTypes.bool,
    suggestions: PropTypes.arrayOf(PropTypes.object),
    selectLocation: PropTypes.func,
    loadSuggestions: PropTypes.func,
  }).isRequired,
  restaurantSearchProps: PropTypes.shape({
    loading: PropTypes.bool,
    suggestions: PropTypes.arrayOf(PropTypes.object),
    loadSuggestions: PropTypes.func,
  }).isRequired,
};

export default Navbar;
