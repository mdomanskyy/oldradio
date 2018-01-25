import { combineReducers } from 'redux';
import { artists } from "./ArtistReducers";

const rootReducer = combineReducers({
  artists
});

export default rootReducer;
