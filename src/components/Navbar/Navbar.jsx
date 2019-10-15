import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import ChangeLocationModal from '../Modals/ChangeLocationModal/ChangeLocationModal';

import './navbar.css';
import RestaurantSearch from '../Search/RestaurantSearch/RestaurantSearch';

const Navbar = ({ locationSearchProps }) => (
  <Menu id="navbar" borderless inverted>
    <Menu.Item>
      <Menu.Header as="h1" content="Gourmato" />
    </Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <RestaurantSearch />
      </Menu.Item>
      <Menu.Item>
        <ChangeLocationModal locationSearchProps={locationSearchProps} />
      </Menu.Item>
    </Menu.Menu>
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
