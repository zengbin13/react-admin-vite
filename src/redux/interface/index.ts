import { RouteMenuObject } from '@/router/interface';

export interface GlobalState {
	token: string;
	themeConfig: {
		isDark: boolean;
	};
}

export interface MenuState {
	isCollapse: boolean;
	menuList: RouteMenuObject[];
}
