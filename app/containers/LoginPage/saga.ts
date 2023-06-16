/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { updateCurrentUser, loginError } from './actions';
import ActionTypes from './constants';
import { USER_API_BASE_URL } from 'utils/constants';
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* loginUser(action) {
  const { userName, userPass } = action.payload.formData;
  const requestURL = `${USER_API_BASE_URL}user/login`;
  try {
    // Call our request helper (see 'utils/request')
    const userData = yield call(request, requestURL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email: userName, password: userPass })
    });
    
    yield put(updateCurrentUser({user: userData.user, token: userData.token}));
  } catch (err) {
    yield put(loginError(err));
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
  yield takeLatest(ActionTypes.LOGIN_USER, loginUser);
}
