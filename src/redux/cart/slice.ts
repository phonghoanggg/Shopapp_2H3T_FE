import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isOpen: false,
	cartItems: [],
};

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		// handle cart

		// handle toggle open cart
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
