import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpenModal: false,
};

const ModalSlice = createSlice({
	name: 'modal',
	initialState,

	reducers: {
		openModalLogin: (state) => {
			state.isOpenModal = true;
		},
		closeModalLogin: (state) => {
			state.isOpenModal = false;
		},
	},
});

export const { closeModalLogin, openModalLogin } = ModalSlice.actions;

export default ModalSlice;
