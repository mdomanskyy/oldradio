import initialState from "../initialStore";
import {GET_ARTIST_INFO_SUCCESS} from "../../actions/ActionTypes";

export function artistInfo(state = initialState.artistInfo, action) {
  switch (action.type) {
    case GET_ARTIST_INFO_SUCCESS:
      return action.artistInfo;
    default:
      return state;
  }
}
