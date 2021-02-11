import {USER_LOADED,LOGIN_SUCCESS,LOGOUT,CLEAR_ERRORS} from '../types'

export default (state, { type, payload }) => {
  switch (type) {
    case USER_LOADED:
      return {...state,isAuthencated: true,user: payload,loading: false,error: null}
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token)
      return {...state,...payload,isAuthencated: true,loading: false,error: null}
    case LOGOUT:
      localStorage.removeItem('token')
      return {...state,token: null,isAuthencated: null,user: null,loading: false,error: payload}
    case CLEAR_ERRORS:
      return {...state,error: null}
    default:
      return state
  }
}