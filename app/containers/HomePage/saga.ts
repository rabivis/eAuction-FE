/**
 * Gets the list country and state using public API call 
 */

 import { call, put, select, takeLatest } from 'redux-saga/effects';
 import { fetchProductListSuccess, fetchProductDetailsSuccess, fetchProductDetailsError, fetchProductListError } from './actions';
 import ActionTypes from './constants';
 import { SELLER_API_BASE_URL } from 'utils/constants';
 import request from 'utils/request';
 import { constants } from 'crypto';
 
 /**
  * Backend API call for get country list handler
  */
 
 
 export function* getProductList(action) {
   // Select username from store
   
   const requestURL = `${SELLER_API_BASE_URL}seller/product-list`;
   try {
     
     // Call our request helper (see 'utils/request')
     const productList = yield call(request, requestURL, {
       method: 'GET',
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
       },
     });
     
     yield put(fetchProductListSuccess(productList));
   } catch (err) {
     yield put(fetchProductListError(err));
   }
 }

 export function* getProductDetails(action) {
    // Select username from store
    let { productId } = action.payload;
    console.log({productId })
    const requestURL = `${SELLER_API_BASE_URL}seller/show-bid`;
    try {
      
      // Call our request helper (see 'utils/request')
      const productDetails = yield call(request, requestURL+"?productId="+productId, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      });
      
      yield put(fetchProductDetailsSuccess(productDetails));
    } catch (err) {
      yield put(fetchProductDetailsError(err));
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
   yield takeLatest(ActionTypes.FETCH_PRODUCT_LIST, getProductList);
   yield takeLatest(ActionTypes.FETCH_PRODUCT_DETAILS, getProductDetails);
 }
 