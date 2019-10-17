import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Segment, Header, Icon,
} from 'semantic-ui-react';

const InternetIssueSegment = ({ reload }) => (
  <Segment placeholder>
    <Header icon>
      <Icon name="wifi" size="large" />
      We are having problems connecting to our servers, please
      check your internet connection and
    </Header>
    <Button color="black" onClick={reload} icon="redo" content="Reload" />
  </Segment>
);

InternetIssueSegment.propTypes = {
  reload: PropTypes.func.isRequired,
};

export default InternetIssueSegment;
