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
    
    case ActionTypes.FETCH_PRODUCT_LIST:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        productList: action.payload.productList,
        loading: false,
        error: state.error,
      };
    case ActionTypes.FETCH_PRODUCT_LIST_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
      case ActionTypes.FETCH_PRODUCT_DETAILS:
      return {
        ...state,
        formData: action.payload.productId,
        loading: true,
        error: false,
      };
    case ActionTypes.FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        productDetails: action.payload.productDetails,
        loading: false,
        error: state.error,
      };
    case ActionTypes.FETCH_PRODUCT_DETAILS_ERROR:
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
