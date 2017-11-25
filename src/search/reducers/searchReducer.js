'use strict'

import { List } from 'immutable'

const initialState = {
  search: '',
  tags: List(),
  suggestions: List()
}

export default searchReducer (
  state = initialState,
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
        suggestions: state.suggestions.push(state.tags.get(action.tagIdx)),
        tags: state.tags.remove(action.tagIdx)
      }

    case 'search-tag-add':
      return {
        ...state,
        tags: state.tags.push(state.suggestions.get(action.suggestionIdx)),
        suggestions: state.suggestions.remove(action.suggestionIdx)
      }

    default:
      return state
  }
}
