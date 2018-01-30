import React from 'react';
import PropTypes from 'prop-types';

import './Notification.css';

import {ERROR, INFO, WARNING} from "./index";

export class Notification extends React.Component {

  constructor(props) {
    super(props);

    this.onCloseClick = this.onCloseClick.bind(this);
  }

  onCloseClick() {
    if (this.props.onCloseHandler) {
      this.props.onCloseHandler(this.props.id);
    }
  }

  render() {
    const {type, message} = this.props;

    return (
        <div className={`notification notification__${type}`}>
          <p>{message}</p>
          <span className="notification--btnClose" onClick={this.onCloseClick}>X</span>
        </div>
    );
  }
}

export const ErrorNotification = (props) => {
  return (
    <Notification type={ERROR} {...props} />
  );
};

export const InfoNotification = (props) => {
  return (
    <Notification type={INFO} {...props}/>
  );
};

Notification.propTypes = {
  type: PropTypes.oneOf([ERROR, WARNING, INFO]).isRequired
};

Notification.propTypes = ErrorNotification.propTypes = InfoNotification.propTypes = {
  message: PropTypes.string.isRequired,
  closeAfter: PropTypes.number,
  onCloseHandler: PropTypes.func
};

