import { useRoutes, Navigate } from 'react-router-dom';
import type { RouteObject, RouteMenuObject } from './interface';
import Login from '@/views/login';

// 导入所有routes模块
const routeModules = import.meta.glob('./modules/*.tsx', { eager: true });

// 处理路由
export const routesArray: RouteMenuObject[] = [];

Object.keys(routeModules).forEach(item => {
	routesArray.push(...(routeModules[item] as { default: RouteMenuObject[] }).default);
});

// 使用js方式定义路由对象
export const rootRoutes: RouteObject[] = [
	{
		path: '/',
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />,
		meta: {
			title: '登录',
			key: 'login',
			requiresAuth: false
		}
	},
	...routesArray,
	{
		path: '*',
		element: <Navigate to="/404" />
	}
];

const Router = () => {
	// useRoutes 功能上相当于<Routes> 返回渲染路由树的React元素
	const element = useRoutes(rootRoutes);
	return element;
};

export default Router;
