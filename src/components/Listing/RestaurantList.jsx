import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Loader, Message, Container,
} from 'semantic-ui-react';

import RestaurantModal from '../Modals/RestaurantModal/RestaurantModal';
import RestaurantCard from '../Cards/RestaurantCard/RestaurantCard';

import './restaurantsList.css';

const CardGroup = ({ items }) => (
  items.length
    ? (
      <Card.Group itemsPerRow={2} id="itemsContainer">
        {items.map((el) => (
          <RestaurantModal
            key={el.id}
            restaurant={el}
            trigger={<RestaurantCard restaurant={el} />}
          />
        ))}
      </Card.Group>
    )
    : <Message info content="No results are found" />
);

CardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// The Actual Card Group List
const RestaurantList = ({ restaurants, loading }) => (
  <Container>
    {loading
      ? <Loader active content="Searching..." />
      : (
        <>
          <p>
            Showing
            {' '}
            <b>{restaurants.length}</b>
            {' '}
            results
          </p>
          <CardGroup items={restaurants} />
        </>
      )}
  </Container>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RestaurantList;
