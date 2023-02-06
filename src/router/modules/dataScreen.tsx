import LayoutIndex from '@/layouts';
import { RouteMenuObject } from '../interface';
import { HomeOutlined } from '@ant-design/icons';

const dataScreenRoutes: Array<RouteMenuObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: 'dataScreen/index',
				element: <div>数据大屏</div>,
				meta: {
					key: 'dataScreen/index',
					title: '数据大屏',
					icon: <HomeOutlined />
				}
			}
		]
	}
];

export default dataScreenRoutes;
