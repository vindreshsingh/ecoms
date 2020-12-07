import { combineReducers } from 'redux';
import alert from './alert';
import progress from './progress';
import product from './product';

// exporting one reducer combining different reducers
export default combineReducers({ alert, progress, product });
