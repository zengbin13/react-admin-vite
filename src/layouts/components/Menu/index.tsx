import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from '@ant-design/icons';
import { getMenuListApi } from '@/api/modules/menu';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
	label: React.ReactNode,
	key: React.Key,
	icon?: React.ReactNode,
	children?: MenuItem[],
	type?: 'group'
): MenuItem {
	return {
		key,
		icon,
		children,
		label,
		type
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem('Option 1', '1', <PieChartOutlined />),
	getItem('Option 2', '2', <DesktopOutlined />),
	getItem('Option 3', '3', <ContainerOutlined />),

	getItem('Navigation One', 'sub1', <MailOutlined />, [
		getItem('Option 5', '5'),
		getItem('Option 6', '6'),
		getItem('Option 7', '7'),
		getItem('Option 8', '8')
	]),

	getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
		getItem('Option 9', '9'),
		getItem('Option 10', '10'),

		getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')])
	])
];

const LayoutMenu = () => {
	const getMenuList = async () => {
		const { data } = await getMenuListApi();
		console.log(data);
	};
	getMenuList();
	return (
		<>
			<Menu mode="inline" theme="dark" items={items} />
		</>
	);
};

export default LayoutMenu;
