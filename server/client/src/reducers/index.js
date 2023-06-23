/* 
Adapted from Stephen Grider's Udemy course Modern React With Redux
*/


import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer
});
