'use strict'

import es6Promise from 'es6-promise'
import Promise from 'bluebird'
import fetch from 'isomorphic-fetch'

import { List } from 'immutable'

import {
  ArticleUtils,
} from './type-methods'

es6Promise.polyfill()

const responseJson = (response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server')
  }

  return response.json()
}

const responseAny = (response) => {
  if (response.status >= 400) {
    throw new Error('Bad response from server')
  }
  return response
}

const credentialsType = 'same-origin'

export function getArticles () {
  return fetch('/api/articles')
    .then(responseJson)
    .then(ArticleUtils.fromPlain)
    // .catch(error)
}
