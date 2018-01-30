import React from 'react';
import PropTypes from 'prop-types';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './AppearAnimation.css';

export const AppearAnimation = ({children, transitionName = 'Fade'}) => {
  return (
    <CSSTransitionGroup
      transitionName={transitionName}
      transitionAppear={true}
      transitionAppearTimeout={5000}
      transitionEnter={false}
      transitionLeave={false}>
      {children}
    </CSSTransitionGroup>
  );
};

AppearAnimation.propTypes = {
  transitionName: PropTypes.oneOf(['Fade', 'Rotate'])
};
