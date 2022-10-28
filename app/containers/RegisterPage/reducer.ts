import { ContainerState, ContainerActions } from './types';
import ActionTypes from './constants';

// The initial state of the App
export const initialState: ContainerState = {
  loading: false,
  error: false,

};

// Take this container's state (as a slice of root state), this container's actions and return new state
function RegisterReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    
    case ActionTypes.REGISTER_USER:
      console.log({formdata: action.payload.formData})
      return {
        ...state,
        formData: action.payload.formData,
        loading: true,
        error: false,
      };
    case ActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        successMsg: action.payload.successMsg,
        loading: false,
        error: state.error,
      };
    case ActionTypes.REGISTER_USER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default RegisterReducer;
