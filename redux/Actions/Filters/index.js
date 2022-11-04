import { ActionTypes } from 'redux/ActionTypes'

export const setFilterAll = () => {
  return {
    type: ActionTypes.FILTER_ALL,
  }
}

export const setFilterPriority = () => {
  return {
    type: ActionTypes.FILTER_PRIORITY,
  }
}
