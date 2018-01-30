import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import './EnterAnimation.css';

const EnterAnimation = ({children, transitionName = 'TransitionX'}) => {
  return (
    <CSSTransitionGroup transitionName={transitionName}
                        transitionAppear={false}
                        transitionEnterTimeout={1000}
                        transitionLeaveTimeout={1000}
                        transitionEnter={true}
                        transitionLeave={true}>
      {children}
    </CSSTransitionGroup>
  );
};

export default EnterAnimation;
