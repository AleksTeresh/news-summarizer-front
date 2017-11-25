import { List } from 'immutable'

const initialState = {
  keyWords: List()
}

export default function homeReducer (
  state = initialState,
  action
) {
  switch (action.type) {
    // case 'home-articles-fetch':
    //   return {
    //     ...state,
    //     keyWords: action.keyWords
    //   }
    default:
      return state
  }
}
