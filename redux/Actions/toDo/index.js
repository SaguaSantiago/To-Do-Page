import { MovingSharp } from '@mui/icons-material'
import { ActionTypes } from 'redux/ActionTypes'
import { generateRandomId } from 'services/generateRandomId'
import { SaveInStorage } from 'Utilities/SaveInStorage'

//start app
export const StartApp = (newState) => {
  console.log(newState)
  return {
    type: ActionTypes.START_APP,
    payload: newState,
  }
}

// add to do
export const addToDoRequest = () => {
  return {
    type: ActionTypes.ADD_TODO_REQUEST,
  }
}

export const addToDoSuccess = (toDo) => {
  return {
    type: ActionTypes.ADD_TODO_SUCCESS,
    payload: toDo,
  }
}

export const addToDoFailure = () => {
  return {
    type: ActionTypes.ADD_TODO_FAILURE,
  }
}

export const addToDo = (state, toDo) => {
  return async (dispatch) => {
    dispatch(addToDoRequest())
    try {
      const id = generateRandomId()
      const newToDo = { ...toDo, id, priority: false }
      dispatch(addToDoSuccess(newToDo))
      SaveInStorage(state, newToDo)
    } catch (msg) {
      console.log(msg)
    }
  }
}

// remove to do

export const removeToDoRequest = () => {
  return {
    type: ActionTypes.REMOVE_TODO_REQUEST,
  }
}
export const removeToDoSuccess = (newState) => {
  return {
    type: ActionTypes.REMOVE_TODO_SUCCESS,
    payload: newState,
  }
}
export const removeToDoFailure = () => {
  return {
    type: ActionTypes.REMOVE_TODO_FAILURE,
  }
}

export const removeToDo = (state, toDo) => {
  return async (dispatch) => {
    dispatch(removeToDoRequest())
    try {
      const allTodos = state.allTodos.filter((t) => t.id !== toDo.id)
      const priorities = state.priorities.filter((t) => t.id !== toDo)
      dispatch(removeToDoSuccess({ allTodos, priorities }))
    } catch (msg) {
      console.log(msg)
    }
  }
}

// add priority
export const addPriorityRequest = (toDo) => {
  return {
    type: ActionTypes.ADD_PRIORITY_REQUEST,
  }
}

export const addPrioritySuccess = (newState) => {
  return {
    type: ActionTypes.ADD_PRIORITY_SUCCESS,
    payload: newState,
  }
}

export const addPriorityFailure = () => {
  return {
    type: ActionTypes.ADD_PRIORITY_FAILURE,
  }
}

export const addPriority = (state, toDo) => {
  return async (dispatch) => {
    dispatch(addPriorityRequest())
    try {
      const allTodos = state.allTodos.filter((t) => t.id !== toDo.id)
      const priorities = [...state.priorities, { ...toDo, priority: true }]
      dispatch(addPrioritySuccess({ allTodos, priorities }))
    } catch (msg) {
      console.log(msg)
    }
  }
}

//remove priority

export const removePriorityRequest = () => {
  return {
    type: ActionTypes.REMOVE_PRIORITY_REQUEST,
  }
}

export const removePriorityFailure = () => {
  return {
    type: ActionTypes.REMOVE_PRIORITY_FAILURE,
  }
}

export const removePrioritySuccces = (newState) => {
  return {
    type: ActionTypes.REMOVE_PRIORITY_SUCCESS,
    payload: newState,
  }
}

export const removePriority = (state, toDo) => {
  return async (dispatch) => {
    dispatch(removePriorityRequest())
    try {
      const priorities = state.priorities.filter((t) => t.id !== toDo.id)
      let allTodos = state.allTodos.filter((t) => t.id !== toDo.id)
      allTodos = [...allTodos, { ...toDo, priority: false }]

      dispatch(removePrioritySuccces({ priorities, allTodos }))
    } catch (msg) {
      console.log(msg)
    }
  }
}
