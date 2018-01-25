import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({name, onClick}) => {
  return (
    <button className="button" onClick={onClick}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default Button;
