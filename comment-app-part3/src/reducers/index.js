import { combineReducers } from 'redux'
import commentReducer from './comments'
import counterReducer from './counter'

export default combineReducers ({
  comment: commentReducer,
  counter: counterReducer
})