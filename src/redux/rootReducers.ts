import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/slice';
import modalSlice from './modal/slice';
const rootReducer = combineReducers({
	[cartSlice.name]: cartSlice.reducer,
	[modalSlice.name]: modalSlice.reducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
