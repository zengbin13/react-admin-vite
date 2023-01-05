import React from 'react';
import type { RouteObject } from '../interface';
import lazyLoad from '../utils/lazyLoad';

const errorRoutes: Array<RouteObject> = [
	{
		path: '/403',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/403')))
	},
	{
		path: '/404',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/404')))
	},
	{
		path: '/500',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/500')))
	}
];

export default errorRoutes;
