import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import { Provider } from 'react-redux'
import CommentApp from './containers/CommentApp'
import reducer from './reducers/index'
import './index.css'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './saga/saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('root')
);
