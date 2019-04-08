import { put, delay, all, call, takeEvery } from 'redux-saga/effects'
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
  const article = yield call(fetchArticle)
  yield delay(1000)
  console.log("========================")
  yield put({type: 'GET_ARTICLE', article: [article.data[0].title, article.data[1].title]})
}

function fetchArticle () {
  return axios.get(
    "http://127.0.0.1:8000/jianshu/test/",
  )
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