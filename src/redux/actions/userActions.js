import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants';
import * as api from '../../api/index';
export { signin, signup, logout };
import { ERROR_MESSAGE } from '../../constants/messages';

const signin = (formData) => async (dispatch) => {
  dispatch({ type: USER_SIGNIN_REQUEST, payload: formData });
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        _id: data.data.result._id,
        token: data.data.token,
      })
    );
  } catch (error) {
    console.error(error);
    dispatch({
      type: USER_SIGNIN_FAIL,
      payload: error?.response ? error.response.data.message : ERROR_MESSAGE,
    });
  }
};

const signup = (formData) => async (dispatch) => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: formData });
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    localStorage.setItem(
      'loggedInUser',
      JSON.stringify({
        _id: data.data.result._id,
        token: data.data.token,
      })
    );
  } catch (error) {
    console.error(error);
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: error?.response ? error.response.data.message : ERROR_MESSAGE,
    });
  }
};

const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: USER_LOGOUT });
};
