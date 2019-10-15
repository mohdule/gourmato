import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Button, Icon, Segment,
} from 'semantic-ui-react';
import LocationSearch from '../../Search/LocationSearch/LocationSearch';

const ChangeLocationModal = ({ locationSearchProps }) => (
  <Modal
    closeIcon
    trigger={
      <Button>Change location</Button>
  }
  >
    <Modal.Header>
      <Icon name="marker" />
      Change Location
    </Modal.Header>
    <Modal.Content>
      <Segment>
        <b>Current Location :</b>
        {' '}
        {locationSearchProps.currentLocation.title}
      </Segment>
      <LocationSearch
        loading={locationSearchProps.loading}
        suggestions={locationSearchProps.suggestions}
        loadSuggestions={locationSearchProps.loadSuggestions}
        selectLocation={locationSearchProps.selectLocation}
      />
    </Modal.Content>
  </Modal>
);

ChangeLocationModal.propTypes = {
  locationSearchProps: PropTypes.shape({
    loading: PropTypes.bool,
    selectLocation: PropTypes.func,
    suggestions: PropTypes.arrayOf(PropTypes.object),
    loadSuggestions: PropTypes.func,
    currentLocation: PropTypes.shape({
      entity_type: PropTypes.string,
      entity_id: PropTypes.number,
      title: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      city_id: PropTypes.number,
      city_name: PropTypes.string,
      country_id: PropTypes.number,
      country_name: PropTypes.string,
    }),
  }).isRequired,
};

export default ChangeLocationModal;
