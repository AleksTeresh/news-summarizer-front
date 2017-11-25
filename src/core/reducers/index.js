
import { combineReducers } from 'redux'

import keyWords from './keyWordReducer'
import articleModal from './articleModalReducers'

export default combineReducers({
  keyWords,
  articleModal
})
