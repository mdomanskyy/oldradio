import { combineReducers } from 'redux';
import { artists } from "./ArtistReducers";
import { notifications } from "./NotificationReducer";
import { artistInfo} from "./ArtistInfoReducer";

const rootReducer = combineReducers({
  artists,
  notifications,
  artistInfo
});

export default rootReducer;
