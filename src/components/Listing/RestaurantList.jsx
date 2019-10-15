import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Loader, Message, Container,
} from 'semantic-ui-react';
import RestaurantModal from '../Modals/RestaurantModal/RestaurantModal';

const CardGroup = ({ items }) => (
  items.length
    ? (
      <Card.Group itemsPerRow={2}>
        {items.map((el) => (
          <RestaurantModal key={el.id} restaurant={el} />
        ))}
      </Card.Group>
    )
    : <Message info content="It seems live you haven't made any sarch" />
);

CardGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

// The Actual Card Group List
const RestaurantList = ({ restaurants, loading }) => (
  <Container fluid>
    {loading
      ? <Loader active content="Searching..." />
      : <CardGroup items={restaurants} />}
  </Container>
);

RestaurantList.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default RestaurantList;
