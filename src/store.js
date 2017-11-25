/* @flow */
'use strict'

import createHistory from 'history/createBrowserHistory'
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'

import * as reducers from './reducer'

let history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

const hasDevTools = process.env.NODE_ENV !== 'production' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__

  const store = createStore(
    combineReducers({
      ...reducers,
      router: routerReducer
    }),
    compose(
      applyMiddleware(middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

export default store
