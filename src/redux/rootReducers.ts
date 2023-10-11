import { combineReducers } from '@reduxjs/toolkit';
import cartSlice from './cart/slice';
const rootReducer = combineReducers({
	[cartSlice.name]: cartSlice.reducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
