import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.register || initialState;



const makeSelectLoading = () =>
    createSelector(selectHome, substate => substate.loading);

const makeSelectError = () =>
    createSelector(selectHome, substate => substate.error);


export { selectHome,  makeSelectLoading, makeSelectError };

