import { RouteMenuObject } from '@/router/interface';

export interface GlobalState {
	token: string;
}

export interface MenuState {
	isCollapse: boolean;
	menuList: RouteMenuObject[];
}
