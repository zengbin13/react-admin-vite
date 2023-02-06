import { RouteMenuObject, RouteMetaMenuObject } from '@/router/interface';

/**
 * @description: 查找匹配的后端路由
 */
export function searchRoute(path: string, routes: RouteMenuObject[]): RouteMetaMenuObject | null {
	let result: RouteMenuObject | null = null;
	for (let item of routes) {
		if (!('meta' in item)) item = item.children[0];
		if (item.meta.key === path) return item;
		if (item.children?.length) {
			const res = searchRoute(path, item.children);
			if (res) return res;
		}
	}
	return result;
}
