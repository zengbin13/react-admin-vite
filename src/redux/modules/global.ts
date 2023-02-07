import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { GlobalState } from '../interface/index';
import { RootState } from '../index';

const initialState: GlobalState = {
	token: '',
	themeConfig: {
		isDark: false
	}
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setToken: (state: GlobalState, action: PayloadAction<string>) => {
			state.token = action.payload;
		},
		setDark: (state: GlobalState, action: PayloadAction<boolean>) => {
			state.themeConfig.isDark = action.payload;
		}
	}
});

// selector
export const selectToken = (state: RootState) => state.global.token;

//action creators
export const { setToken, setDark } = globalSlice.actions;

//reducer函数
export default globalSlice.reducer;
