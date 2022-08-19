import { ActionTypes } from '../../ActionTypes'

const initialState = {
  isAuthenticated: false,
  token: null,
  loading: false,
}

const auth = (state = initialState, { type, payload }) => {
  switch (type) {
    // Login
    case ActionTypes.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        token: true,
        isAuthenticated: true,
        loading: false,
      }
    }
    case ActionTypes.LOGIN_FAILURE:
      return {
        ...state,
        profile: null,
        loading: false,
      }
    // Logout
    case ActionTypes.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false,
      }
    // Update password
    case ActionTypes.UPDATE_PASSWORD_REQUEST:
      return {
        ...state,
        loading: true,
      }
    case ActionTypes.UPDATE_PASSWORD_SUCCESS:
      return {
        ...state,
        loading: false,
      }
    case ActionTypes.UPDATE_PASSWORD_FAILURE:
      return {
        ...state,
        loading: false,
      }
    default:
      return state
  }
}

export default auth
