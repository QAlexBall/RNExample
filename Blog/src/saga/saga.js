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
  yield put({type: 'GET_ARTICLE', articleList: [article.data[0], article.data[1]]})
}

export function* getArticleDetail () {
    const article = yield call(fetchArticle)
    yield delay(1000)
    yield put({type: 'GET_ARTICLE_DETAIL_BY_INDEX', article: [article.data[0]]})
}

export function* changeArticleContent () {
    getArticle()
}

function fetchArticle () {
  return axios.get(
    "http://127.0.0.1:8000/jianshu/test/",
  )
}

export function* watchGetArticle() {
  yield takeEvery('GET_ARTICLE_ASYNC', getArticle)
  yield takeEvery('GET_ARTICLE_DETAIL', getArticleDetail)
  yield takeEvery('CHNAGE_ARTICLE_CONTENT', changeArticleContent)
}

// single entry point to start all Sagas at once
export default function* rootSaga() {
  yield all([
    helloSaga(),
    watchIncrementAsync(),
    watchGetArticle()
  ])
}