import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from '@/redux/interface';

const initialState: MenuState = {
	isCollapse: true
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		updateCollapse: (state, action: PayloadAction<boolean>) => {
			state.isCollapse = action.payload;
		}
	}
});

export const { updateCollapse } = menuSlice.actions;

export default menuSlice.reducer;
