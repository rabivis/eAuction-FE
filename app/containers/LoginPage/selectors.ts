import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectHome = (state: ApplicationRootState) => state.login || initialState;


const makeSelectCurrentUser = () =>
    createSelector(selectHome, substate => substate.currentUser);

const makeSelectLoading = () =>
    createSelector(selectHome, substate => substate.loading);

const makeSelectError = () =>
    createSelector(selectHome, substate => substate.error);

export { selectHome, makeSelectCurrentUser, makeSelectLoading, makeSelectError };

