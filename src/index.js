'use strict'

import 'react-tag-autocomplete/example/styles.css'

// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/css/bootstrap-theme.min.css'
import './index.css'

import 'font-awesome/css/font-awesome.min.css'
import 'font-awesome/fonts/fontawesome-webfont.woff2'
import 'font-awesome/fonts/fontawesome-webfont.woff'
import 'font-awesome/fonts/fontawesome-webfont.ttf'

import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { syncHistoryWithStore } from 'react-router-redux'

import store from './store'

import HomePage from './home/components'
import SearchPage from './search'
import SummaryView from './summary/components/SummaryView'
import { Header, Footer, ArticleModal } from './core/components'

const minHeight = window.innerHeight;
const mainContainerDiv = {
  backgroundColor: "#fff",
  paddingBottom: "20px",
  boxShadow: "0 0 30px grey",
  minHeight: minHeight
}

const Root = (
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <div className="container" style={ mainContainerDiv }>
            {/* <SearchBar classNameForm={'input-group main-search-bar'} classNameSpan={'input-group-btn'}/> */}
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route exact path="/search" component={SearchPage} />

                <Route exact path="/:category" component={SearchPage} />
                <Route exact path="/test/summary" component={SummaryView} />
            </Switch>
        </div>
        <Footer />
        <ArticleModal/>
      </div>
    </BrowserRouter>
  </Provider>
  )

ReactDOM.render(Root, document.getElementById('root'))
