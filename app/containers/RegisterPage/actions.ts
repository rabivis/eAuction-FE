import { action } from 'typesafe-actions';
import { RegisterFormParams, SuccessMsgRegister } from './Register.d';

import ActionTypes from './constants';

export const submitUserRegister = (formData: RegisterFormParams) =>
    action(ActionTypes.REGISTER_USER, { formData });

export const userRegisterSuccess = (successMsg: SuccessMsgRegister) =>
    action(ActionTypes.REGISTER_USER_SUCCESS, { successMsg });

export const userRegisterError = (error: any) =>
    action(ActionTypes.REGISTER_USER_ERROR, { error });