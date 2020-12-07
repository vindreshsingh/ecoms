import { LOADING_START, LOADING_STOP } from './actionTypes';

// setting progress bar status to true when app is doing API call
export function loadingStart() {
  return {
    type: LOADING_START,
  };
}

// setting progress bar status to false when app is completed API call
export function loadingStop() {
  return {
    type: LOADING_STOP,
  };
}
