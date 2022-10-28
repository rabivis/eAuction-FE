import { action } from 'typesafe-actions';
import { LoginFormParams, CurrentUser } from './Login.d';

import ActionTypes from './constants';

export const loginUserSubmit = (formData: LoginFormParams) =>
    action(ActionTypes.LOGIN_USER, { formData } );

export const updateCurrentUser = (currentUser: CurrentUser) =>
    action(ActionTypes.LOGIN_USER_SUCCESS, { currentUser });

export const loginError = (error: any) =>
    action(ActionTypes.LOGIN_USER_ERROR, error);