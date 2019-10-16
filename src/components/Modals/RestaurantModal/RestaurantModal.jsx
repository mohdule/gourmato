import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Image, Rating, Header, Container, Grid, List, Button,
} from 'semantic-ui-react';
import RestaurantCard from '../../Cards/RestaurantCard/RestaurantCard';

const RestaurantModal = ({ restaurant }) => (
  <Modal
    trigger={<RestaurantCard restaurant={restaurant} />}
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
        <p>{restaurant.localityVerbose}</p>
        <small>{restaurant.highlights.join(', ')}</small>
        <Rating rating={parseInt(restaurant.rating, 10)} maxRating={5} icon="star" />
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
              {Array.isArray(restaurant.phoneNumbers) ? restaurant.phoneNumbers.join(' / ') : restaurant.phoneNumbers}
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={8}>
          <List.Item>
            <List.Icon name="money" />
            <b>Average Cost For Two: </b>
            {restaurant.averageCostForTwo ? `${restaurant.averageCostForTwo} ${restaurant.currency}` : 'unknown'}
          </List.Item>
          <List.Item>
            <List.Icon name="money" />
            <b>Price range: </b>
            {restaurant.priceRange ? `${restaurant.priceRange} ${restaurant.currency}` : 'unknown'}
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
      <Button as="a" target="_blank" href={restaurant.menuUrl} content="View Menu" icon="list" />
      <Button as="a" target="_blank" href={restaurant.photosUrl} content="View Images" icon="image" />
    </Modal.Actions>
  </Modal>
);

RestaurantModal.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.string,
    highlights: PropTypes.arrayOf(PropTypes.string),
    phoneNumbers: PropTypes.string,
    address: PropTypes.string,
    locality: PropTypes.string,
    localityVerbose: PropTypes.string,
    cuisines: PropTypes.string,
    thumb_url: PropTypes.string,
    menuUrl: PropTypes.string,
    photosUrl: PropTypes.string,
    averageCostForTwo: PropTypes.number,
    priceRange: PropTypes.number,
    currency: PropTypes.string,
  }).isRequired,
};

export default RestaurantModal;
