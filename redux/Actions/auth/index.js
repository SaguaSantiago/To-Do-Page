import { ActionTypes } from '../../ActionTypes'
import * as api from '../../../modules'
import { toast } from 'react-toastify'

/* Login */
export const loginRequest = (payload) => {
  return {
    type: ActionTypes.LOGIN_REQUEST,
    payload,
  }
}

export const loginSuccess = (payload) => {
  return {
    type: ActionTypes.LOGIN_SUCCESS,
    payload,
  }
}

export const loginFailure = () => {
  return {
    type: ActionTypes.LOGIN_FAILURE,
  }
}

export const login = (params) => {
  return async (dispatch) => {
    dispatch(loginRequest(params))
    try {
      if (params.email && params.password) {
        return dispatch(loginSuccess({}))
      }
    } catch ({ message }) {
      toast.error('Invalid credentials!')
      return dispatch(loginFailure())
    }
  }
}

/* Logout */
export const logout = () => {
  return {
    type: ActionTypes.LOGOUT,
  }
}

/* Recover Password */
export const startRecoverPassword = () => {
  return {
    type: ActionTypes.RECOVER_PASSWORD_REQUEST,
  }
}

export const recoverPasswordSuccess = (payload) => {
  return {
    type: ActionTypes.RECOVER_PASSWORD_SUCCESS,
    payload,
  }
}

export const recoverPasswordFailure = () => {
  return {
    type: ActionTypes.RECOVER_PASSWORD_FAILURE,
  }
}

export const recoverPassword = (params) => {
  return async (dispatch) => {
    dispatch(startRecoverPassword())
    try {
      const {
        data: { data },
      } = await api.recoverPasswordUser(params)
      toast.success('Recover successfully... Check your email!')
      return dispatch(recoverPasswordSuccess(data))
    } catch ({ message }) {
      toast.error('Invalid email!')
      return dispatch(recoverPasswordFailure())
    }
  }
}

/* Reset Password */
export const startResetPassword = () => {
  return {
    type: ActionTypes.RESET_PASSWORD_REQUIRE,
  }
}

export const resetPasswordSuccess = (payload) => {
  return {
    type: ActionTypes.RESET_PASSWORD_SUCCESS,
    payload,
  }
}

export const resetPasswordFailure = () => {
  return {
    type: ActionTypes.RESET_PASSWORD_FAILURE,
  }
}

export const resetPassword = (params) => {
  return async (dispatch) => {
    dispatch(startResetPassword())
    try {
      const {
        data: { data },
      } = await api.resetPasswordUser(params)
      toast.success('Password updated successfully!')

      return dispatch(resetPasswordSuccess(data))
    } catch ({ message }) {
      toast.error('Invalid params Error: ' + message)
      return dispatch(resetPasswordFailure())
    }
  }
}

/* Update Profile */
export const updateProfileRequest = () => {
  return {
    type: ActionTypes.UPDATE_PROFILE_REQUEST,
  }
}

export const updateProfileSuccess = (payload) => {
  return {
    type: ActionTypes.UPDATE_PROFILE_SUCCESS,
    payload,
  }
}

export const updateProfileFailure = () => {
  return {
    type: ActionTypes.UPDATE_PROFILE_FAILURE,
  }
}

export const updateProfile = (params) => {
  return async (dispatch) => {
    dispatch(updateProfileRequest())
    try {
      await api.updateUser(params)
      toast.success('Profile updated successfully!')
      return dispatch(updateProfileSuccess(params))
    } catch ({ message }) {
      toast.error('Invalid params Error: ' + message)
      return dispatch(updateProfileFailure())
    }
  }
}

/* Change password */
export const changePasswordRequest = () => {
  return {
    type: ActionTypes.UPDATE_PASSWORD_REQUEST,
  }
}

export const changePasswordSuccess = (payload) => {
  return {
    type: ActionTypes.UPDATE_PASSWORD_SUCCESS,
    payload,
  }
}

export const changePasswordFailure = () => {
  return {
    type: ActionTypes.UPDATE_PASSWORD_FAILURE,
  }
}

export const changePassword = (params) => {
  return async (dispatch) => {
    dispatch(changePasswordRequest())
    try {
      await api.updatePasswordUser(params)
      toast.success('Password updated successfully!')
      return dispatch(changePasswordSuccess(params))
    } catch ({ message }) {
      toast.error('Invalid params Error: ' + message)
      return dispatch(changePasswordFailure())
    }
  }
}
