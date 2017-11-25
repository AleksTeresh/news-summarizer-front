'use strict'

import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../client'

function * fetchKeyWords (action): Generator<any, any, any> {
  try {
    const keyWords = yield call(
      client.getKeyWords,
      action.limit,
      0
    )
    yield put({ type: 'core-key-words-fetch-success', keyWords: keyWords })
  } catch (e) {
    console.error(e)
    yield put({ type: 'core-key-words-fetch-failure' })
  }
}

function * coreSaga (): Generator<any, any, any> {
  yield takeEvery('core-key-words-fetch-request', fetchKeyWords)
}

export default coreSaga
