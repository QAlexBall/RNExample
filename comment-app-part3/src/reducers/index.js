import { combineReducers } from 'redux'
import commentReducer from './comments'
import counterReducer from './counter'
import articleReducer from './article'

export default combineReducers ({
  comment: commentReducer,
  counter: counterReducer,
  article: articleReducer
})