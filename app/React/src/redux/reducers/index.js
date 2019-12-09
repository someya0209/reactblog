import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as formReducer } from 'redux-form'

import AppReducer from './App'
import ReduxtestReducer from './reduxtest/index';
import PostIndexReducer from './posts/index';
import PostAddReducer from './posts/add'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  //posts
  PostIndexReducer,
  PostAddReducer,
  //reduxtest
  ReduxtestReducer,
})
export default createRootReducer
