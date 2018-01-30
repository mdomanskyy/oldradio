import {REMOVE_NOTIFICATION} from "./ActionTypes";

export const removeNotification = (id)=>({
  type: REMOVE_NOTIFICATION,
  id
});
