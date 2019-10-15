import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Icon } from 'semantic-ui-react';
import LocationSearch from '../../Search/LocationSearch/LocationSearch';

const ChangeLocationModal = ({ locationSearchProps }) => (
  <Modal
    trigger={
      <Button>Change location</Button>
  }
    closeIcon
  >
    <Modal.Header>
      <Icon name="marker" />
      Change Location
    </Modal.Header>
    <Modal.Content>
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
    value: PropTypes.string,
    loading: PropTypes.bool,
    onSearchChange: PropTypes.func,
    results: PropTypes.arrayOf(PropTypes.object),
    onResultSelect: PropTypes.func,
  }).isRequired,
};

export default ChangeLocationModal;
