// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		isCartVisible: false,
	},
	reducers: {
		showCart: (state) => {
			state.isCartVisible = true;
		},
		hideCart: (state) => {
			state.isCartVisible = false;
		},
	},
});

export const { showCart, hideCart } = cartSlice.actions;

export default cartSlice.reducer;
