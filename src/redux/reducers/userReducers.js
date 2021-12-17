import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';

const INITIAL_STATE = {
  loggedInUser: null,
  loading: false,
  error: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGOUT:
      return {};

    case USER_SIGNIN_REQUEST:
    case USER_REGISTER_REQUEST:
      return { ...state, loading: true, error: '' };

    case USER_SIGNIN_SUCCESS:
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        loggedInUser: action.payload.data.result,
        error: '',
      };

    case USER_REGISTER_FAIL:
    case USER_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default userReducer;
