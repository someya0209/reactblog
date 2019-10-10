import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import AppReducer from './App'
import ReduxtestReducer from './reduxtest/index';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  //posts

  //reduxtest
  ReduxtestReducer,
})
export default createRootReducer
