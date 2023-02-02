import http from '@/api';

/**
 * @description: 后台获取菜单目录
 */
export interface ApiMenuItem {
	name: string;
	path: string;
	meta: {
		title: string;
		icon?: string;
	};
	children?: ApiMenuItem[];
}
export const getMenuListApi = () => {
	return http.get<ApiMenuItem[]>('/api/menus');
};
