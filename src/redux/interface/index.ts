import { RouteMenuObject } from '@/router/interface';

export interface GlobalState {
	token: string;
	themeConfig: {
		isDark: boolean;
		themeName: ThemeName;
	};
}

export type ThemeName = 'light' | 'peach';

export interface MenuState {
	isCollapse: boolean;
	menuList: RouteMenuObject[];
}
