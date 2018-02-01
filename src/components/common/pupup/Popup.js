import React from 'react';
import ReactDOM from 'react-dom';

import PropTypes from 'prop-types';

import './Popup.css';

class Popup extends React.Component {

  constructor(props) {
    super(props);
    this.contentRef = null;
    this.state = {
      position: null
    };
  }

  calculatePosition(padding = 5) {
    let {target} = this.props;
    var result = {};
    var targetCords = target.getBoundingClientRect();
    var popupCords = this.contentRef.getBoundingClientRect();

    result.left = targetCords.left - (popupCords.width / 2 - targetCords.width /2);
    result.top = targetCords.top - popupCords.height - padding;

    if (result.top < 0) {
      result.top = targetCords.bottom + padding;
    }
    if (result.left < 0 ) {
      result.left = padding;
    }
    if (result.left + popupCords.width > window.screen.width) {
      result.left = window.screen.width - popupCords.width - padding;
    }

    return result;
  }

  componentDidMount() {
    const position = this.calculatePosition();
    this.setState({
      position: position
    });
  }

  render() {
    const { position } = this.state;
    return ReactDOM.createPortal (
        <div ref={(ref) => this.contentRef = ref}
             style={position}
             className="popup">
          {this.props.children}
        </div>
      ,
      document.getElementById("popupLayer")
    );
  }
}

Popup.propTypes = {
  target: PropTypes.object.isRequired
};

export default Popup;
