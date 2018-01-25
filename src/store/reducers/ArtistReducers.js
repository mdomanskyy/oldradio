import initialState from "../initialStore";
import {SEARCH_ARTIST_SUCCESS} from "../../anctions/ActionTypes";

export function artists(state = initialState.artists, action) {
  switch (action.type) {
    case SEARCH_ARTIST_SUCCESS:
      return [...action.artists];
    default:
      return state;
  }
}
