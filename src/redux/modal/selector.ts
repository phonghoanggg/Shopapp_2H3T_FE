import { createSelector } from '@reduxjs/toolkit';
import { get } from 'lodash';
import { AppState } from '..';
import modalSlice from './slice';

const ModalStore = (state: AppState) => get(state, modalSlice.name, modalSlice.getInitialState());

export const selectIsToggleModalLogin = createSelector([ModalStore], (state) =>
	get(state, 'isOpenModalRegister', false),
);
