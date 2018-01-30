import { combineReducers } from 'redux';
import { artists } from "./ArtistReducers";
import  { notifications } from "./NotificationReducer";

const rootReducer = combineReducers({
  artists,
  notifications
});

export default rootReducer;
