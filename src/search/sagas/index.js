'use strict'

import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../client'

function * fetchArticles (action): Generator<any, any, any> {
  try {
    const articles = yield call(
      client.getArticles,
      action.keyWords,
      action.limit,
      0,
      action.categories
    )
    yield put({ type: 'search-articles-fetch-success', articles: articles })
  } catch (e) {
    yield put({ type: 'search-articles-fetch-failure' })
  }
}

function * coreSaga (): Generator<any, any, any> {
  yield takeEvery('search-articles-fetch-request', fetchArticles)
}

export default coreSaga
