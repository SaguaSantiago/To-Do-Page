import { ActionTypes } from 'redux/ActionTypes'

import { generateRandomId } from 'services/generateRandomId'
import { SaveInStorage } from 'Utilities/SaveInStorage'

import { toast } from 'react-toastify'

//start app
export const StartApp = (newState) => {
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
      const newState = { ...state, allTodos: [...state.allTodos, newToDo] }
      dispatch(addToDoSuccess(newToDo))
      toast.success(`Una nueva tarea ha sido creada`)
      SaveInStorage(newState)
    } catch (msg) {
      toast.error('Ha sucedido un error al crear la Tarea')
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
      const priorities = state.priorities.filter((t) => t.id !== toDo.id)
      const ready = state.ready.filter((t) => t.id !== toDo.id)
      const newState = { allTodos, priorities, ready }
      dispatch(removeToDoSuccess(newState))
      SaveInStorage({ ...state, ...newState })
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

export const setReadyRequest = () => {
  return {
    type: ActionTypes.SET_READY_REQUEST,
  }
}

export const setReadySuccess = (ToDo) => {
  return {
    type: ActionTypes.SET_READY_SUCCESS,
    payload: ToDo,
  }
}

export const setReadyFailure = () => {
  return {
    type: ActionTypes.SET_READY_FAILURE,
  }
}

export const setReady = (state, ToDo) => {
  return async (dispatch) => {
    dispatch(setReadyRequest())
    try {
      const { priorities, ready, allTodos } = state
      let newState
      let newReady
      let newAllTodos
      let newPriorities

      if (ready.find(({ id }) => id === ToDo.id)) {
        newReady = ready.filter(({ id }) => id !== ToDo.id)
        newAllTodos = [...allTodos, ToDo]
        newPriorities = newAllTodos.filter(({ priority }) => priority === true)
        newState = { priorities: newPriorities, allTodos: newAllTodos, ready: newReady }
        toast.success('Tarea restaurada con exito')
      } else {
        newPriorities = priorities.filter(({ id }) => id !== ToDo.id)
        newAllTodos = allTodos.filter(({ id }) => id !== ToDo.id)
        newReady = [...ready, ToDo]
        newState = { priorities: newPriorities, allTodos: newAllTodos, ready: newReady }
        toast.success('Una Tarea ha sido completada')
      }
      SaveInStorage({ ...state, ...newState })
      dispatch(setReadySuccess(newState))
    } catch (msg) {
      console.log(msg)
    }
  }
}

export const searcheToDos = (textSearched, state) => {
  if (textSearched === '') {
    return {
      type: ActionTypes.SEARCHE_TODOS,
      payload: {},
    }
  }
  const allTodos = state.allTodos.filter(({ title }) => title.toUpperCase().includes(textSearched))
  const ready = state.ready.filter(({ title }) => title.toUpperCase().includes(textSearched))
  const priorities = allTodos.filter((toDo) => toDo.priority === true)
  return {
    type: ActionTypes.SEARCHE_TODOS,
    payload: { allTodos, ready, priorities },
  }
}
