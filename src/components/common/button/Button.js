import React from 'react';
import PropTypes from 'prop-types';

import './Button.css';

const Button = ({name, onClick, className, buttonRef}) => {
  return (
    <button ref={buttonRef} className={`button ${className}`} onClick={onClick}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  buttonRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func])
};

export default Button;
