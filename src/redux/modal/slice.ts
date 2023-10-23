import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpenModalRegister: false,
};

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		openModalRegister: (state) => {
			state.isOpenModalRegister = true;
		},
		closeModalRegister: (state) => {
			state.isOpenModalRegister = false;
		},
	},
});

export const { openModalRegister, closeModalRegister } = modalSlice.actions;

export default modalSlice;
