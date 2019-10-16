import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, Rating, Image, Grid, Header, Icon,
} from 'semantic-ui-react';

import './restaurantCard.css';

const RestaurantCard = ({ restaurant, ...otherProps }) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Card id="restaurantCard" {...otherProps}>
    <Card.Content>
      <Grid>
        <Grid.Column width={4}>
          <Image src={restaurant.thumb_url ? restaurant.thumb_url : 'https://react.semantic-ui.com/images/wireframe/image.png'} />
        </Grid.Column>
        <Grid.Column width={12}>
          <Card.Header>
            <Header content={restaurant.name} />
            <Header sub content={restaurant.locality} />
            User rating:
            {' '}
            <Rating icon="star" maxRating={5} rating={restaurant.rating} disabled />
            {' '}
            (
            {restaurant.rating}
            )
          </Card.Header>
          <Card.Description>
            <br />
            <Icon name="map marker alternate" />
            <b>Address: </b>
            {restaurant.address}
            <br />
            <Icon name="food" />
            <b>Cuisines: </b>
            [
            {restaurant.cuisines}
            ]
          </Card.Description>
        </Grid.Column>
      </Grid>
    </Card.Content>
  </Card>
);

RestaurantCard.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    locality: PropTypes.string,
    rating: PropTypes.string,
    address: PropTypes.string,
    cuisines: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string),
      PropTypes.string,
    ]),
    thumb_url: PropTypes.string,
  }).isRequired,
};

export default RestaurantCard;
