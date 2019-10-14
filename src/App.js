import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Dimmer, Loader } from 'semantic-ui-react';

import Main from './views/Main';
import SetLocation from './views/SetLocation';

import { checkForCachedLocation } from './store/modules/location';

const App = ({ match }) => {
  // State Selectors
  const entityId = useSelector((state) => state.location.current.entity_id);
  const loading = useSelector((state) => state.location.loading);

  // Action dispatchers
  const dispatch = useDispatch();
  const retrieveCachedLocation = useCallback(() => dispatch(checkForCachedLocation()), [dispatch]);

  // Effects
  useEffect(() => {
    retrieveCachedLocation();
  }, [retrieveCachedLocation]);

  if (loading) {
    return (
      <Dimmer active>
        <Loader />
      </Dimmer>
    );
  }

  if (!entityId) {
    return (
      <SetLocation />
    );
  }

  return (
    <Switch>
      <Route path={match.path} component={Main} />
    </Switch>
  );
};

App.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};

export default App;
