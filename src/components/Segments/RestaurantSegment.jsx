/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment, Header, Container, Rating, Icon,
} from 'semantic-ui-react';

const RestaurantSegment = ({ restaurant, ...otherProps }) => (
  <Segment {...otherProps}>
    <Header as="h5">{restaurant.name}</Header>
    <Rating rating={parseInt(restaurant.rating, 10)} maxRating={5} icon="star" disabled />
    <Container>
      <p>{restaurant.locality}</p>
      <Icon name="food" />
      <b>Cuisines: </b>
      {' '}
      {restaurant.cuisines}
    </Container>
  </Segment>
);

RestaurantSegment.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    locality: PropTypes.string,
    rating: PropTypes.string,
    cuisines: PropTypes.string,
  }).isRequired,
};

export default RestaurantSegment;
