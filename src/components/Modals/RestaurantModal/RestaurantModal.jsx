import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Image, Rating, Header, Container, Grid, List, Button,
} from 'semantic-ui-react';

const RestaurantModal = ({ restaurant, trigger }) => (
  <Modal
    trigger={trigger}
    centered={false}
    closeIcon
  >
    <Modal.Header>
      <Image
        circular
        size="medium"
        centered
        src={restaurant.thumb_url
          ? restaurant.thumb_url
          : 'https://react.semantic-ui.com/images/wireframe/image.png'}
      />
      <br />
      <Container text textAlign="center">
        <Header content={restaurant.name} />
        <p>{restaurant.locality_verbose}</p>
        <small>{restaurant.highlights.join(', ')}</small>
        <br />
        <Rating rating={parseInt(restaurant.rating, 10)} maxRating={5} icon="star" disabled />
      </Container>
    </Modal.Header>
    <Modal.Content>
      <Grid>
        <Grid.Column width={8}>
          <List>
            <List.Item>
              <List.Icon name="map marker" />
              {restaurant.address}
            </List.Item>
            <List.Item>
              <List.Icon name="phone" />
              {Array.isArray(restaurant.phone_numbers) ? restaurant.phone_numbers.join(' / ') : restaurant.phone_numbers}
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <List.Item>
            <List.Icon name="money" />
            <b>Average Cost For Two: </b>
            {restaurant.average_cost_for_two ? `${restaurant.average_cost_for_two} ${restaurant.currency}` : 'unknown'}
          </List.Item>
          <List.Item>
            <List.Icon name="money" />
            <b>Price range: </b>
            {restaurant.price_range ? `${restaurant.price_range} ${restaurant.currency}` : 'unknown'}
          </List.Item>
          <List.Item>
            <List.Icon name="food" />
            <b>Cuisines: </b>
            {restaurant.cuisines}
          </List.Item>
        </Grid.Column>
      </Grid>
    </Modal.Content>
    <Modal.Actions>
      <Button as="a" target="_blank" href={restaurant.menu_url} content="View Menu" icon="list" />
      <Button as="a" target="_blank" href={restaurant.photos_url} content="View Images" icon="image" />
    </Modal.Actions>
  </Modal>
);

RestaurantModal.propTypes = {
  trigger: PropTypes.node.isRequired,
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    phone_numbers: PropTypes.string,
    address: PropTypes.string,
    locality: PropTypes.string,
    locality_verbose: PropTypes.string,
    cuisines: PropTypes.string,
    thumb_url: PropTypes.string,
    menu_url: PropTypes.string,
    photos_url: PropTypes.string,
    average_cost_for_two: PropTypes.number,
    price_range: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default RestaurantModal;
