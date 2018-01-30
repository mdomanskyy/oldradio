import initialState from "../initialStore";
import {REMOVE_NOTIFICATION, SEARCH_ARTIST_FAILED, SEARCH_ARTIST_SUCCESS} from "../../actions/ActionTypes";
import {error, info} from "../../components/common/notification";

function notifications(state = initialState.notifications, action) {
  switch (action.type) {
    case SEARCH_ARTIST_FAILED:
      return [...state, error(action.message)];
    case SEARCH_ARTIST_SUCCESS:
      return [...state, info("Artist loaded success!")];
    case REMOVE_NOTIFICATION:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export {notifications};
