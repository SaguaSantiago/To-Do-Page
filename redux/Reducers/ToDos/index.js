import { ActionTypes } from 'redux/ActionTypes'

const initialState = {
  loading: false,
  allTodos: [],
  priorities: [],
  ready: [],
}

const toDos = (state = initialState, { type, payload }) => {
  switch (type) {
    //start app
    case ActionTypes.START_APP:
      return {
        ...payload,
      }
    // add to do
    case ActionTypes.ADD_TODO_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.ADD_TODO_SUCCESS:
      return {
        ...state,
        allTodos: [...state.allTodos, payload],
        loading: false,
      }
    case ActionTypes.ADD_TODO_FAILURE:
      return {
        ...state,
        loading: false,
      }

    // add priority
    case ActionTypes.ADD_PRIORITY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.ADD_PRIORITY_SUCCESS:
      return {
        ...payload,
        loading: false,
      }
    case ActionTypes.ADD_PRIORITY_FAILURE:
      return {
        ...state,
        loading: false,
      }

    // remove to do
    case ActionTypes.REMOVE_PRIORITY_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.REMOVE_TODO_SUCCESS:
      return { ...payload, loading: false }
    case ActionTypes.REMOVE_PRIORITY_FAILURE:
      return {
        ...state,
        loading: false,
      }

    //remove priority
    case ActionTypes.REMOVE_PRIORITY_REQUEST:
      return { ...payload, loading: true }
    case ActionTypes.REMOVE_PRIORITY_SUCCESS:
      return { ...payload, loading: false }
    case ActionTypes.REMOVE_PRIORITY_FAILURE:
      return { ...state, loading: false }
    default:
      return state
  }
}

export default toDos
