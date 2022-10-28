import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import {  RegisterFormParams, SuccessMsgRegister } from './Register.d';

/* --- STATE --- */

interface RegisterState {
    readonly loading: boolean;
    readonly error?: object | boolean;
    readonly formData?: RegisterFormParams;
    readonly successMsg?: SuccessMsgRegister;
}

/* --- ACTIONS --- */
type RegisterActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = RegisterState;
type ContainerActions = RegisterActions;

export { ContainerState, ContainerActions };
