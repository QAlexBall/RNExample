import { put, delay, all, takeEvery } from 'redux-saga/effects'
import axios from 'axios'

export function* helloSaga() {
  yield console.log('Hello Saga!')
  yield console.log('hello, agian')
}

export function* incrementAsync() {
  yield delay(1000)
  yield put({type: 'INCREMENT'})
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* getArticle () {
  yield put({type: 'GET_ARTICLE', article: "after get"})

  // yield axios.get(
  //   "http://127.0.0.1:8000/jianshu/test/", 
  //   { 
  //     header: {'Access-Control-Allow-Origin': '*', },
  //     useCredentails: true,
  //   }
  // ).then((result) => {
  //   console.log(result)
  // })
}

export function* watchGetArticle() {
  yield takeEvery('GET_ARTICLE_ASYNC', getArticle)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchGetArticle()
  ])
}