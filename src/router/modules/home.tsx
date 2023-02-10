import LayoutIndex from '@/layouts';
import type { RouteMenuObject } from '../interface';
import { HomeOutlined } from '@ant-design/icons';
import Home from '@/views/home';

const homeRoutes: Array<RouteMenuObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: '/index',
				element: <Home />,
				meta: {
					key: 'index',
					title: '首页',
					icon: <HomeOutlined />
				}
			}
		]
	}
];

export default homeRoutes;
