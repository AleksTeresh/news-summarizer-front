'use strict'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

import Search from './intro'

injectTapEventPlugin()
store.subscribe(bindActors(
  store,
  ))
const history = syncHistoryWithStore(hashHistory, store)

const Root = (
  <Provider store={store}>
      <Router history={history}>
        <Route path='/search' component={Search} />
        <Route path='*' component={() => (<div><h1>Page not found</h1><p><Link to='/'>Back</Link></p></div>)} />
      </Router>
  </Provider>
  )

ReactDOM.render(Root, document.getElementById('root'))
