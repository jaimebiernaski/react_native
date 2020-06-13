import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import * as SecureStore from 'expo-secure-store';

const initialAuthState = { token: null, errorMessage: '' };

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error': {
      return { ...state, errorMessage: action.payload };
    }
    case 'signin': {
      return { token: action.payload, errorMessage: '' };
    }
    case 'signup': {
      return { token: action.payload, errorMessage: '' };
    }
    case 'restore': {
      return { ...state, token: action.payload };
    }
    case 'signout': {
      return initialAuthState;
    }
    case 'clear_error_message': {
      return { ...state, errorMessage: '' };
    }
    default:
      return state;
  }
};

/**
 * 1. try signup in the api
 * 2. handle success by update state
 * 3. handle fail by showing error message
 */
const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await SecureStore.setItemAsync('token', response.data.token);
    dispatch({ type: 'signup', payload: response.data.token });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with signup',
    });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await SecureStore.setItemAsync('token', response.data.token);
    dispatch({ type: 'signin', payload: response.data.token });
  } catch (err) {
    dispatch({
      type: 'add_error',
      payload: 'Something went wrong with sign in',
    });
  }
};

const signout = (dispatch) => async () => {
  try {
    // const response = await trackerApi.post('/signup', { email, password });
    await SecureStore.deleteItemAsync('token');
    dispatch({ type: 'signout' });
  } catch (err) {
    console.log('err');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' });
};

const localSignin = (dispatch) => async () => {
  try {
    const token = await SecureStore.getItemAsync('token');
    dispatch({ type: 'restore', payload: token });
  } catch (err) {
    await SecureStore.deleteItemAsync('token');
    dispatch({ type: 'signout' });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signin, signup, signout, localSignin, clearErrorMessage },
  initialAuthState
);
