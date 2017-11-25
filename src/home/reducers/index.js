import { List } from 'immutable'

const initialState = {
  articles: List()
}

export default function homeReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    case 'home-articles-fetch-success':
      return {
        ...state,
        articles: action.articles
      }
    default:
      return state
  }
}
