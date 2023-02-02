import { createSlice } from '@reduxjs/toolkit';
import type { GlobalState } from '../interface/index';
import { RootState } from '../index';

const initialState: GlobalState = {
	token: ''
};

const globalSlice = createSlice({
	name: 'global',
	initialState,
	reducers: {
		setToken: (state: GlobalState, { payload }) => {
			state.token = payload;
		}
	}
});

// selector
export const selectToken = (state: RootState) => state.global.token;

//action creators
export const { setToken } = globalSlice.actions;

//reducer函数
export default globalSlice.reducer;
