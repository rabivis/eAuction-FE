import { ActionType } from 'typesafe-actions';
import * as actions from './actions';
import {  ProductIdInpit, ProductList, productDetails, SuccessProductMessage} from './HomePage';

/* --- STATE --- */

interface ProductState {
    readonly loading: boolean;
    readonly error?: object | boolean;
    readonly formData?: String;
    readonly successMsg?: SuccessProductMessage;
    readonly productList?: ProductList;
    readonly productDetails?: productDetails; 
}

/* --- ACTIONS --- */
type ProductActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

type ContainerState = ProductState;
type ContainerActions = ProductActions;

export { ContainerState, ContainerActions };
