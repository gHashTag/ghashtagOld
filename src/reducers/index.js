import { combineReducers } from 'redux'
import PlayReducers from './PlayReducer'

export default combineReducers({
  play: PlayReducers
})
