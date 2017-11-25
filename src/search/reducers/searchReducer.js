'use strict'

import { List } from 'immutable'

function getInitState () {
  return {
    search: '',
    tags: List()
  }
}

export default function searchReducer (
  state = getInitState (),
  action
) {
  switch (action.type) {
    case 'search-search-edit':
      return {
        ...state,
        search: action.value
      }

    case 'search-tag-remove':
      return {
        ...state,
        tags: state.tags.remove(action.tagIdx)
      }

    case 'search-tag-add':
      return {
        ...state,
        tags: state.tags.push(action.tag),
      }
    case 'search-tags-clear':
      return {
        ...state,
        tags: List()
      }
    default:
      return state
  }
}
