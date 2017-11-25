'use strict'

import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../../core/client'

function * fetchArticles (action): Generator<any, any, any> {
  try {
    // console.log(action.keyWords.toArray())
    const articles = yield call(
      client.getArticles,
      action.keyWords.map((p) => p.name),
      action.limit,
      0,
      action.categories
    )
    yield put({ type: 'search-articles-fetch-success', articles: articles })
  } catch (e) {
    console.error(e)
    yield put({ type: 'search-articles-fetch-failure' })
  }
}

function * searchSaga (): Generator<any, any, any> {
  yield takeEvery('search-articles-fetch-request', fetchArticles)
}

export {
  searchSaga
}
