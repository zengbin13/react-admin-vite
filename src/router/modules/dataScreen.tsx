import LayoutIndex from '@/layouts';
import { RouteMenuObject } from '../interface';
import { HomeOutlined } from '@ant-design/icons';
import DataScreen from '@/views/dataScreen';
const dataScreenRoutes: Array<RouteMenuObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: 'dataScreen/index',
				element: <DataScreen />,
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
