import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		isOpen: false,
		cartItems: [],
	},
	reducers: {
		openCart: (state) => {
			state.isOpen = true;
		},
		closeCart: (state) => {
			state.isOpen = false;
		},
	},
});

export const { openCart, closeCart } = cartSlice.actions;

export default cartSlice;
