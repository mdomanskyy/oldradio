import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Notification} from "./Notification";
import {ERROR, INFO} from "./index";

import Button from "../button/Button";
import Popup from '../../common/pupup/Popup';
import {removeNotification} from "../../../actions/NotificationAction";

import './NotificationsContainer.css'
import EnterAnimation from "../animation/EnterAnimation";


class NotificationsContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showErrors:false,
      showInfos:false
    };

    this.onShowClick = this.onShowClick.bind(this);
    this.onNotificationClose = this.onNotificationClose.bind(this);
    this.renderNotificationPopup = this.renderNotificationPopup.bind(this);
    this.renderNotificationItems = this.renderNotificationItems.bind(this);
  }

  onShowClick(type) {
    if(type===ERROR) {
      this.revertPropState('showErrors');
    } else {
      this.revertPropState('showInfos');
    }
  }

  revertPropState(name) {
    this.setState((prevState) => {
      return {
        [name]: !prevState[name]
      }
    });
  }

  onNotificationClose(id) {
    this.props.removeNotification(id);
  }

  renderNotificationItems({type, message, id}) {
    return <Notification type={type}
        key={id}
        onCloseHandler={this.onNotificationClose}
        message={message} id={id}/>
  }

  renderNotificationPopup(type, items, target) {
    if (items.length < 1) return null;
    return (
        <Popup target={target}>
          <EnterAnimation>
            {items.map(this.renderNotificationItems)}
          </EnterAnimation>
        </Popup>
    );
  }


  render() {
    const {errors, infos } =  this.props;
    return (
      <div className="notifications">
        <Button buttonRef={buttonRef => this.errorButton = buttonRef}
                className={`notification--indicator__error`}
                name={errors.length}
                onClick={e => this.onShowClick(ERROR)}/>

        <EnterAnimation transitionName="TransitionY">
        {
          this.state.showErrors &&
          this.renderNotificationPopup(ERROR, errors, this.errorButton)
        }
        </EnterAnimation>

        <Button buttonRef={buttonRef => this.infoButton = buttonRef}
                className={`notification--indicator__info`}
                name={infos.length}
                onClick={e => this.onShowClick(INFO)}/>
        <EnterAnimation>
        {
          this.state.showInfos &&
          this.renderNotificationPopup(INFO, infos, this.infoButton)
        }
        </EnterAnimation>
      </div>
    );
  }
}

const selectNotificationsByType = (state, type) => {
  return state.notifications.filter(item => item.type === type);
};

const mapStateToProps = (state) => ({
  errors: selectNotificationsByType(state, ERROR),
  infos: selectNotificationsByType(state, INFO)
});

const mapDispatchToPros = (dispatch) => ({
  removeNotification: bindActionCreators(removeNotification, dispatch)
});

export default connect(mapStateToProps, mapDispatchToPros)(NotificationsContainer);
