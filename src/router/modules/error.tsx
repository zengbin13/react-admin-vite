import React from 'react';
import type { RouteMenuObject } from '../interface';
import lazyLoad from '../utils/lazyLoad';

const errorRoutes: Array<RouteMenuObject> = [
	{
		path: '/403',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/403'))),
		meta: {
			key: '403',
			title: '403',
			hidden: true
		}
	},
	{
		path: '/404',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/404'))),
		meta: {
			key: '404',
			title: '404',
			hidden: true
		}
	},
	{
		path: '/500',
		element: lazyLoad(React.lazy(() => import('@/components/ErrorMessage/500'))),
		meta: {
			key: '500',
			title: '500',
			hidden: true
		}
	}
];

export default errorRoutes;
