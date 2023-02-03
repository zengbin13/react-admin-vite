import LayoutIndex from '@/layouts';
import type { RouteMenuObject } from '../interface';
// import React from 'react';
// import lazyLoad from '../utils/lazyLoad';
import { HomeOutlined } from '@ant-design/icons';

const homeRoutes: Array<RouteMenuObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			key: 'root',
			title: '首页',
			icon: <HomeOutlined />
		},
		children: [
			{
				path: '/index',
				element: <div>首页</div>,
				meta: {
					key: 'index',
					title: '首页'
				}
			}
		]
	}
];

export default homeRoutes;
