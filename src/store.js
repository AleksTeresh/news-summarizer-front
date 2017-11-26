/* @flow */
'use strict'

import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import createSagaMiddleware from 'redux-saga'

import { coreSaga } from './core/sagas'
import { searchSaga } from './search/sagas'
import { homeSaga } from './home/sagas'
import { summarySaga } from './summary/sagas'

import * as reducers from './reducer'

let history = createHistory()

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const hasDevTools = process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

console.log(reducers)
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  compose(
    applyMiddleware(middleware, sagaMiddleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

// then run the saga
sagaMiddleware.run(coreSaga)
sagaMiddleware.run(searchSaga)
sagaMiddleware.run(homeSaga)
sagaMiddleware.run(summarySaga)

export default store
