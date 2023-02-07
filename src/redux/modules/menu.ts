import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MenuState } from '@/redux/interface';
import { RootState } from '@/redux';
import { RouteMenuObject } from '@/router/interface';

const initialState: MenuState = {
	isCollapse: false,
	menuList: []
};

const menuSlice = createSlice({
	name: 'menu',
	initialState,
	reducers: {
		updateCollapse: (state, action: PayloadAction<boolean>) => {
			state.isCollapse = action.payload;
		},
		setMenuList: (state, action: PayloadAction<RouteMenuObject[]>) => {
			state.menuList = action.payload;
		}
	}
});

export const selectBackMenuList = (state: RootState) => state.menu.menuList;

export const { updateCollapse, setMenuList } = menuSlice.actions;

export default menuSlice.reducer;
