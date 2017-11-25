
import { combineReducers } from 'redux'

import search from './searchReducer'
import article from './articleReducer'

export default combineReducers({
  search,
  article
})
