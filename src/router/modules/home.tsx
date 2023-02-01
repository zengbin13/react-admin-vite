import LayoutIndex from '@/layouts';
import type { RouteObject } from '../interface';
// import React from 'react';
// import lazyLoad from '../utils/lazyLoad';

const homeRoutes: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/home/index',
				element: <div>首页</div>
			}
		]
	}
];

export default homeRoutes;
