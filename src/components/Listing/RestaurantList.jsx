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

const RestaurantList = ({ restaurants, loading }) => (
  <Container fluid>
    {loading
      ? <Loader active content="Searching..." />
      : <CardGroup items={restaurants} />}
  </Container>
);

export default RestaurantList;
