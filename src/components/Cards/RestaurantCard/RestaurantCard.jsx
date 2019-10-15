import React from 'react';
import {
  Card, Rating, Image, Grid, Header, Icon,
} from 'semantic-ui-react';

import './restaurantCard.css';

const RestaurantCard = ({ restaurant }) => (
  <Card id="restaurantCard">
    <Card.Content>
      <Grid>
        <Grid.Column width={4}>
          <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        </Grid.Column>
        <Grid.Column width={12}>
          <Card.Header>
            <Header content={restaurant.name} />
            <Header sub content={restaurant.locality} />
            User rating:
            {' '}
            <Rating icon="star" maxRating={5} rating={restaurant.rating} disabled />
          </Card.Header>
          <Card.Description>
            <br />
            <Icon name="map marker alternate" />
            {restaurant.address}
            <br />
            <Icon name="food" />
            Cuisines: [
            {restaurant.cuisines}
            ]
          </Card.Description>
        </Grid.Column>
      </Grid>
    </Card.Content>
  </Card>
);

export default RestaurantCard;
