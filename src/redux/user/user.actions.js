import { UserActionTypes } from './user.types';
import axios from 'axios'

export const setCurrentUser = user => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user
});

export const setLoading = (payload) => ({
  type: UserActionTypes.SET_LOADING,
  payload
});

export const setError = (payload) => ({
  type: UserActionTypes.SET_ERROR,
  payload
});
export const setLoadingSignup = (payload) => ({
  type: UserActionTypes.SET_LOADING_SIGNUP,
  payload
});

export const setErrorSignup = (payload) => ({
  type: UserActionTypes.SET_ERROR_SIGNUP,
  payload
});
export const logout = (payload) => ({
  type: UserActionTypes.LOGOUT,
  payload
});

export function login(payload) {
  return async (dispatch) => {
      dispatch(setLoading(true))
      dispatch(setError(null))
      try {
          const { data } = await axios.post(`http://43.205.49.108:9009/v1/auth/login`,payload)
          dispatch(setLoading(false))
          if (!data) {
            dispatch(setError(data?.message ?? 'something went wrong'))
          } else if (data) {
            dispatch(setCurrentUser(data?.user))
          }
      } catch (error) {
           dispatch(setLoading(false))
          dispatch(setError(error?.response?.data?.message ?? 'something went wrong'))
      }
  };
}
export function signup(payload) {
  return async (dispatch) => {
      dispatch(setLoadingSignup(true))
      dispatch(setErrorSignup(null))
      try {
          const { data } = await axios.post(`http://43.205.49.108:9009/v1/auth/register`,payload)
          dispatch(setLoadingSignup(false))
          if (!data) {
            dispatch(setError(data?.message ?? 'something went wrong'))
          } else if (data) {
            dispatch(setCurrentUser(data.user))
          }
      } catch (error) {
          dispatch(setLoadingSignup(false))
          dispatch(setErrorSignup(error?.response?.data?.message ?? 'something went wrong'))
      }
  };
}
