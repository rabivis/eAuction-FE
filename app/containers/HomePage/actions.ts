import { action } from 'typesafe-actions';
import { ProductIdInpit, ProductList, productDetails } from './HomePage';

import ActionTypes from './constants';

export const fetchProductList = () =>
action(ActionTypes.FETCH_PRODUCT_LIST);

export const fetchProductListSuccess = (productList: ProductList) =>
action(ActionTypes.FETCH_PRODUCT_LIST_SUCCESS, { productList });

export const fetchProductListError = (error: any) =>
action(ActionTypes.FETCH_PRODUCT_LIST_ERROR, { error });

export const fetchProductDetails = (productId: String) =>
action(ActionTypes.FETCH_PRODUCT_DETAILS,{ productId });

export const fetchProductDetailsSuccess = (productDetails: productDetails) =>
action(ActionTypes.FETCH_PRODUCT_DETAILS_SUCCESS, { productDetails });

export const fetchProductDetailsError = (error: any) =>
action(ActionTypes.FETCH_PRODUCT_DETAILS_ERROR, { error });
