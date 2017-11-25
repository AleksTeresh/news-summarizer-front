import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../../core/client'

function * fetchArticles (action): Generator<any, any, any> {
  try {
    const articles = yield call(
      client.getArticles,
      null,
      action.limit,
      0,
      null
    )
    yield put({ type: 'home-articles-fetch-success', articles: articles })
  } catch (e) {
    yield put({ type: 'home-articles-fetch-failure' })
  }
}

function * homeSaga (): Generator<any, any, any> {
  yield takeEvery('home-articles-fetch-request', fetchArticles)
}

export {
  homeSaga
}
