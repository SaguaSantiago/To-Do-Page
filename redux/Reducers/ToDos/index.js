import { ActionTypes } from 'redux/ActionTypes'

const initialState = {
  loading: false,
  allTodos: [],
  priorities: [],
  ready: [],
  searched: {},
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
      return { ...state, ...payload, loading: false }
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
      return { ...state, ...payload, loading: false }
    case ActionTypes.REMOVE_PRIORITY_FAILURE:
      return {
        ...state,
        loading: false,
      }

    //remove priority
    case ActionTypes.REMOVE_PRIORITY_REQUEST:
      return { ...payload, loading: true }
    case ActionTypes.REMOVE_PRIORITY_SUCCESS:
      return {
        ...state,
        priorities: payload.priorities,
        allTodos: payload.allTodos,
        loading: false,
      }
    case ActionTypes.REMOVE_PRIORITY_FAILURE:
      return { ...state, loading: false }

    //ready

    case ActionTypes.SET_READY_REQUEST:
      return {
        ...state,
        loading: true,
      }

    case ActionTypes.SET_READY_SUCCESS:
      return {
        ...state,
        ...payload,
        loading: false,
      }

    case ActionTypes.SET_READY_FAILURE:
      return {
        ...state,
        loading: false,
      }

    case ActionTypes.SEARCHE_TODOS:
      return {
        ...state,
        searched: { ...payload },
      }

    default:
      return state
  }
}

export default toDos
