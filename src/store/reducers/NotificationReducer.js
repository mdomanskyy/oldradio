import initialState from "../initialStore";
import {
  GET_ARTIST_INFO_FAILED,
  GET_ARTIST_INFO_SUCCESS, REMOVE_NOTIFICATION, SEARCH_ARTIST_FAILED,
  SEARCH_ARTIST_SUCCESS
} from "../../actions/ActionTypes";
import {error, info} from "../../components/common/notification";

function notifications(state = initialState.notifications, action) {
  switch (action.type) {
    case SEARCH_ARTIST_FAILED:
      return [...state, error(action.message)];
    case SEARCH_ARTIST_SUCCESS:
      return [...state, info("Artist loaded success!")];
    case GET_ARTIST_INFO_SUCCESS:
      return [...state, info(`${action.artistInfo.name}'s info loaded!`)];
    case GET_ARTIST_INFO_FAILED:
      return [...state, error(`${action.message}`)];
    case REMOVE_NOTIFICATION:
      return state.filter(item => item.id !== action.id);
    default:
      return state;
  }
}

export {notifications};
