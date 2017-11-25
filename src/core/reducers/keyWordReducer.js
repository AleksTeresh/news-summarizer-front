'use strict'

import { List } from 'immutable'

const initialState = {
  keyWords: List(),
  selectedKeyWord: null
}

export default function keyWordReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'core-key-words-fetch-success':
      return {
        ...state,
        keyWords: action.keyWords
      }
    case 'core-keyword-select':
      return {
        ...state,
        selectedKeyWord: action.keyWord
      }
    default:
      return state
  }
}
