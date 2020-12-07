import {
  SET_MESSAGE,
  CLEAR_MESSAGE,
  SET_ERROR,
  CLEAR_ERROR,
} from '../actions/actionTypes';

// loading reducer intial state to maintain message and error
const initialState = {
  message: null,
  error: null,
};

// changing message state in store on the basis of different actions for setting alerts
export default function auth(state = initialState, action) {
  switch (action.type) {
    case SET_MESSAGE:
      return {
        ...state,
        message: { title: action.title, detail: action.detail },
      };
    case CLEAR_MESSAGE:
      return {
        ...state,
        message: null,
      };
    case SET_ERROR:
      return {
        ...state,
        error: { title: action.title, detail: action.detail },
      };
    case CLEAR_ERROR:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
}
