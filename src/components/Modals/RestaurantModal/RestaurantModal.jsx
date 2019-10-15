import React from 'react';
import { Modal } from 'semantic-ui-react';
import RestaurantCard from '../../Cards/RestaurantCard/RestaurantCard';

const RestaurantModal = ({ restaurant }) => (
  <Modal trigger={<RestaurantCard restaurant={restaurant} />}>
    <Modal.Header>
      Hello
    </Modal.Header>
    <Modal.Content>
      This modal is under development, plesae visit back later
    </Modal.Content>
  </Modal>
);

export default RestaurantModal;
