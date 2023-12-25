import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { AppState } from '..';
import modalSlice from '../modal/slice';

const AuthenStore = (state: AppState) => get(state, modalSlice.name, modalSlice.getInitialState());

export const selectInformationUserLoginEmail = createSelector([AuthenStore], (state) => get(state, 'user', null));
