'use strict'

import { List } from 'immutable'

const initialState = {
  keyWords: List()
}

export default function keyWordReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'core-key-word-fetch-success':
      return {
        ...state,
        keyWords: action.keyWords
      }

    default:
      return state
  }
}
