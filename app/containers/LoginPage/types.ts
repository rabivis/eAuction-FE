import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import { CurrentUser, LoginFormParams } from './Login.d';

/* --- STATE --- */

interface LoginState {
    readonly loading: boolean;
    readonly error?: object | boolean;
    readonly currentUser?: CurrentUser;
    readonly loginFormParams?: LoginFormParams;
}

/* --- ACTIONS --- */
type LoginActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = LoginState;
type ContainerActions = LoginActions;

export { ContainerState, ContainerActions };
