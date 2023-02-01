import http from '@/api';

/**
 * @description: 后台获取菜单目录
 */

export const getMenuListApi = () => {
	return http.get('/api/menus');
};
