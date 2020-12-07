import { LOADING_START, LOADING_STOP } from '../actions/actionTypes';

// loading reducer intial state to maintain loading progress bar
const initialState = {
  isLoading: false,
};

// changing store on the basis of different actions for loading progress bar
export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOADING_START:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_STOP:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
}
