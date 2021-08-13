import { combineReducers } from 'redux';
import listingReducer from './listingReducer';
const allReducers = combineReducers({
  listing: listingReducer,

});
export default allReducers; 