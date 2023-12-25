// authSlice.ts
import { auth } from '@/configs/FireBase';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '..';

// firebase
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

interface AuthState {
	user: any | null;
	loading: boolean;
	error: string | null;
}

const initialState: AuthState = {
	user: null,
	loading: false,
	error: null,
};

const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		// Login Email Firebase
		loginEmailStart: (state) => {
			state.loading = true;
			state.error = null;
		},
		loginEmailSuccess: (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.user = action.payload;
		},
		loginEmailFailure: (state, action: PayloadAction<any>) => {
			state.loading = false;
			state.error = action.payload;
		},
		logOut: (state, action: PayloadAction<string>) => {
			state.user = null;
		},
	},
});

// handle login firebase

export const loginWithGoogle = (): AppThunk => async (dispatch) => {
	try {
		dispatch(loginEmailStart());
		const provider = new GoogleAuthProvider();
		const userCredential = await signInWithPopup(auth, provider);
		dispatch(loginEmailSuccess(userCredential.user));
	} catch (error) {
		dispatch(loginEmailFailure(error));
	}
};

export const { loginEmailStart, loginEmailSuccess, loginEmailFailure, logOut } = authSlice.actions;

export default authSlice;
