import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Container } from 'semantic-ui-react';
import ChangeLocationModal from '../Modals/ChangeLocationModal/ChangeLocationModal';

import './navbar.css';
import RestaurantSearch from '../Search/RestaurantSearch/RestaurantSearch';

const Navbar = ({ locationSearchProps }) => (
  <Menu id="navbar" borderless inverted fixed="top">
    <Container>
      <Menu.Item>
        <Menu.Header as="h1" content="Gourmato" />
      </Menu.Item>
      <Menu.Item>
        <RestaurantSearch />
      </Menu.Item>
      <Menu.Item position="right">
        <ChangeLocationModal locationSearchProps={locationSearchProps} />
      </Menu.Item>
    </Container>
  </Menu>
);

Navbar.propTypes = {
  locationSearchProps: PropTypes.shape({
    loading: PropTypes.bool,
    suggestions: PropTypes.arrayOf(PropTypes.object),
    selectLocation: PropTypes.func,
    loadSuggestions: PropTypes.func,
  }).isRequired,
};

export default Navbar;
