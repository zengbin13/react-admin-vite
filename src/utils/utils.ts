import { RouteMenuObject } from '@/router/interface';

/**
 * @description: 查找匹配的后端路由
 */
export function searchRoute(path: string, routes: RouteMenuObject[]): RouteMenuObject | null {
	let result: RouteMenuObject | null = null;
	for (const item of routes) {
		if (item.meta.key === path) return item;
		if (item.children?.length) {
			const res = searchRoute(path, item.children);
			if (res) return res;
		}
	}
	return result;
}
