/**
 * Gets the list country and state using public API call 
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { userRegisterSuccess, userRegisterError } from './actions';
import ActionTypes from './constants';

import request from 'utils/request';
import { constants } from 'crypto';

/**
 * Backend API call for get country list handler
 */


export function* registerUser(action) {
  // Select username from store
  let { formData } = action.payload;
  
  const requestURL = `http://localhost:8090/api/v1/user/register`;
  try {
    
    // Call our request helper (see 'utils/request')
    const userData = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });
    
    yield put(userRegisterSuccess({ successMsg: userData }));
  } catch (err) {
    yield put(userRegisterError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* connectToBackend() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(ActionTypes.REGISTER_USER, registerUser);
}
