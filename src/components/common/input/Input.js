import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({placeholder, onChange, onPressEnter}) => {
  return (
    <input className="input" type="text"
           placeholder={placeholder}
           onChange={onChange} onKeyDown={event => {event.key === 'Enter' && onPressEnter(event)}}/>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onPressEnter: PropTypes.func
};

export default Input;
