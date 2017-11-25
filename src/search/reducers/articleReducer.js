'use strict'

import { List } from 'immutable'

const initialState = {
  articles: List()
}

export default function searchReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'search-articles-fetch-success':
      return {
        ...state,
        articles: action.articles
      }

    default:
      return state
  }
}
