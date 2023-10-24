import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpenModalRegister: false,
	isOpenModalLogin: false,
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
		openModalLogin: (state) => {
			state.isOpenModalLogin = true;
		},
		closeModalLogin: (state) => {
			state.isOpenModalLogin = false;
		},
	},
});

export const { openModalRegister, closeModalRegister, openModalLogin, closeModalLogin } = modalSlice.actions;

export default modalSlice;
