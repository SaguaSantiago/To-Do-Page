const { ActionTypes } = require('redux/ActionTypes')

const initialState = 'all'

const filters = (state = initialState, { type }) => {
  switch (type) {
    case ActionTypes.FILTER_ALL:
      return 'all'
    case ActionTypes.FILTER_PRIORITY:
      return 'priority'
    case ActionTypes.FILTER_READY:
      return 'ready'
    default:
      return state
  }
}
export default filters
