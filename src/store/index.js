import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';
import logger from 'redux-logger';
let store;

//function for setting store and returning it
export function configureStore() {
  store = createStore(reducer, applyMiddleware(thunk, logger));
  return store;
}
