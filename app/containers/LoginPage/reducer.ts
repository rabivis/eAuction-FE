import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,
  currentUser: undefined,
};

// Take this container's state (as a slice of root state), this container's actions and return new state
function LoginReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.LOGIN_USER:
      return {
        loginFormParams: action.payload.formData,
        loading: true,
        error: false,
      };
    case ActionTypes.LOGIN_USER_SUCCESS:
      return {
        currentUser: action.payload.currentUser,
        loading: false,
        error: state.error,
      };
    case ActionTypes.LOGIN_USER_ERROR:
      const { error, loading, ...rest } = state;
      return {
        error: action.payload,
        loading: false,
        ...rest,
      };
    default:
      return state;
  }
}

export default LoginReducer;
