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

export function getArticles (
  keyWords?,
  limit = 20,
  offset = 0,
  categories?
) {
  return fetch(
    '/api/articles?' +
    'limit=' + limit +
    '&offset=' + offset +
    (keyWords ? ('&keyWords=' + keyWords.toArray) : '') +
    (categories ? ('&categories=' + categories.toArray) : '')
  )
    .then(responseJson)
    .then((articleResponse) => List(articleResponse.articles).map(ArticleUtils.fromPlain))
    // .catch(error)
}

export function getKeyWords (limit = 15, offset = 0) {
  return fetch(
    '/api/keywords?' +
    'limit=' + limit +
    '&offset=' + offset
  )
    .then(responseJson)
    .then((keyWords) => List(keyWords))
}
