import { createSlice } from '@reduxjs/toolkit';
import type { GlobalState } from '../interface/index';

const initialState: GlobalState = {
	token: 'xx'
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

//action creators
export const { setToken } = globalSlice.actions;

//reducer函数
export default globalSlice.reducer;
