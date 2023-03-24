import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  currentUser: null,
  loading:false,
  error: null,
  loadingSignup:false,
  errorSignup: null
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case UserActionTypes.SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case UserActionTypes.SET_ERROR:
      return {
        ...state,
        error: action.payload
      };
    case UserActionTypes.SET_LOADING_SIGNUP:
      return {
        ...state,
        loadingSignup: action.payload
      };
    case UserActionTypes.SET_ERROR_SIGNUP:
      return {
        ...state,
        errorSignup: action.payload
      };
    case UserActionTypes.LOGOUT:
      return INITIAL_STATE;
    default: 
      return state;
  }
};

export default userReducer;