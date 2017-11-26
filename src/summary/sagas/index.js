'use strict'

import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../../core/client'

function * fetchSummary (action): Generator<any, any, any> {
  try {
    // console.log(action.keyWords.toArray())
    const summary = yield call(
      client.getSummary,
      action.content
    )

    console.log(summary)
    yield put({ type: 'summary-fetch-success', summary })
  } catch (e) {
    console.error(e)
    yield put({ type: 'summary-fetch-failure' })
  }
}

function * summarySaga (): Generator<any, any, any> {
  yield takeEvery('summary-fetch-request', fetchSummary)
}

export {
  summarySaga
}
