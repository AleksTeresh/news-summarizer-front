'use strict'

import moment from 'moment'

import { call, put, takeEvery } from 'redux-saga/effects'

import * as client from '../../core/client'

import config from '../../config'

import type { GigLoadAction, CreateWatchdogAction } from '../actions'
import type { GigResponse } from '../../core/types'

function * fetchArticles (action: GigLoadAction): Generator<any, any, any> {
  try {
    const gigResponse: GigResponse = yield call(
      client.fetchGigs,
      action.keyPhrase,
      config.fetchLimit.gig,
      action.offset,
      action.ignoreAuthorFilter
      ? undefined
      : action.authors,
      action.genres,
      action.venues,
      action.ignoreStartDateFilter
      ? undefined
      : moment(action.startDate, 'DD.MM.YYYY').format('YYYY-MM-DD'),
      action.ignoreEndDateFilter
      ? undefined
      : moment(action.endDate, 'DD.MM.YYYY').format('YYYY-MM-DD')
    )
    yield put({ type: 'search-gigs-load-success', gigs: gigResponse.gigs })
    yield put({ type: 'search-pagination-gig-count-set', count: gigResponse.count })
  } catch (e) {
    console.error(e)
    yield put({ type: 'search-gigs-load-failure' })
  }
}

function * searchClientSaga (): Generator<any, any, any> {
  yield takeEvery('search-articles-fetch-request', fetchArticles)
}

export default searchClientSaga
