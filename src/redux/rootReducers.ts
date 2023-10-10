import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from './cart/slice';
const rootReducer = combineReducers({
	cart: cartReducer,
});

export type RootReducer = typeof rootReducer;
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
