import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.product || initialState;


const makeSelectProductList = () =>
    createSelector(selectHome, substate => substate.productList);

const makeSelectProductDetails = () =>
    createSelector(selectHome, substate => substate.productDetails);

const makeSelectLoading = () =>
    createSelector(selectHome, substate => substate.loading);

const makeSelectError = () =>
    createSelector(selectHome, substate => substate.error);

export { selectHome, makeSelectProductList, makeSelectProductDetails, makeSelectLoading, makeSelectError };

