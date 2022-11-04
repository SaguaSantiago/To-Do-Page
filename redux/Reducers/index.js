import { combineReducers } from 'redux'
import toDos from './ToDos'
import filter from './Filters'

export default combineReducers({
  toDos,
  filter,
})
