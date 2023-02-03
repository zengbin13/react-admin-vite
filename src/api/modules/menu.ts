import http from '@/api';
import { RouteMenuObject } from '@/router/interface';

interface BackMenuItem {
	name: string;
	path: string;
	meta: {
		title: string;
		icon?: string;
		hidden?: boolean;
	};
	children?: BackMenuItem[];
}

/**
 * @description: 后台获取菜单目录
 */
export const getMenuListApi = async (): Promise<RouteMenuObject[]> => {
	const { data } = await http.get<BackMenuItem[]>('/api/menus');
	if (!data?.length) return [];
	return transRouteMenu(data);
};

function transRouteMenu(list: BackMenuItem[], newArr: RouteMenuObject[] = []) {
	list.forEach(item => {
		if (!item.children?.length) {
			return newArr.push({
				path: item.path,
				meta: {
					key: item.name,
					title: item.meta.title,
					icon: item.meta.icon,
					hidden: item.meta.hidden
				}
			});
		}
		newArr.push({
			path: item.path,
			meta: {
				key: item.name,
				title: item.meta.title,
				icon: item.meta.icon,
				hidden: item.meta.hidden
			},
			children: transRouteMenu(item.children)
		});
	});
	return newArr;
}
