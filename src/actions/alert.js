import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_ERROR,
  CLEAR_ERROR,
} from './actionTypes';

// for setting up message in alert state
function setMessage(title, detail) {
  return {
    type: SET_MESSAGE,
    title,
    detail,
  };
}

// for clearing message in alert after showing alert
function clearMessage() {
  return {
    type: CLEAR_MESSAGE,
  };
}

// for setting up error in state
function setError(title, detail) {
  return {
    type: SET_ERROR,
    title,
    detail,
  };
}

// for clearing error from the state after showing alert
function clearError() {
  return {
    type: CLEAR_ERROR,
  };
}

export { setMessage, clearMessage, setError, clearError };
