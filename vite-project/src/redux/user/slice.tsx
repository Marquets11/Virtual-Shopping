import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
	currentUser: {
		email: string;
		password: string;
	} | null;
}

const initialState: User = { currentUser: null };

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login(
			_state: User,
			{ payload }: PayloadAction<{ email: string; password: string }>
		) {
			return {
				currentUser: {
					email: payload.email,
					password: payload.password,
				},
			};
		},
		logout() {
			return { currentUser: null };
		},
	},
});

export const user = userSlice.reducer;
export const { login, logout } = userSlice.actions;
export const useUser = (state: any) => state.user as User;
