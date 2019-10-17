import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';

import './fab.css';

const Fab = ({
  iconName, content, circular, color, size, handleClick,
}) => (
  <Button
    icon={iconName}
    content={content || null}
    circular={circular}
    color={color}
    size={size}
    className="fab"
    onClick={handleClick}
  />
);

Fab.propTypes = {
  iconName: PropTypes.string,
  content: PropTypes.string,
  circular: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.string,
  handleClick: PropTypes.func,
};

Fab.defaultProps = {
  iconName: 'arrow up',
  content: '',
  circular: false,
  color: 'black',
  size: 'big',
  handleClick: (e) => {
    e.preventDefault();
    window.scrollTo(0, 0);
  },
};

export default Fab;
