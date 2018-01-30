import uuid4 from 'uuid/v4';

export const ERROR = 'error';
export const WARNING = 'warning';
export const INFO = 'info';

function notification(type, message) {
  return {type, message, id:uuid4()};
}

export function error(message) {
  return notification(ERROR, message);
}

export function info(message) {
  return notification(INFO, message);
}
