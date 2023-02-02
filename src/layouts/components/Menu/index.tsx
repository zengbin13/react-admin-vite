import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { getMenuListApi, ApiMenuItem } from '@/api/modules/menu';
import { useEffect, useState } from 'react';
import ReactIcon from '@/components/ReactIcon';
import { RobotOutlined } from '@ant-design/icons';

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

const LayoutMenu = () => {
	//菜单目录
	const [items, setItems] = useState<MenuItem[]>([]);
	// 获取动态图标
	const getIcon = (name?: string): React.ReactNode => {
		if (!name) return null;
		return <RobotOutlined />;
		return <ReactIcon type={'icon-home'} style={{ color: '#a6adb4', fontSize: '18px' }}></ReactIcon>;
	};
	// 处理后台数据为antd menu需要的格式
	const deepLoopFloat = (list: ApiMenuItem[], newArr: MenuItem[] = []) => {
		list.forEach(item => {
			if (!item?.children?.length) return newArr.push(getItem(item.meta.title, item.name, getIcon(item.meta.icon)));
			newArr.push(getItem(item.meta.title, item.name, getIcon(item.meta.icon), deepLoopFloat(item.children)));
		});
		return newArr;
	};
	// 后台获取菜单目录
	const getMenuList = async () => {
		const { data } = await getMenuListApi();
		if (!data) return;
		setItems(deepLoopFloat(data));
	};

	useEffect(() => {
		getMenuList();
	}, []);

	return (
		<>
			<Menu mode="inline" theme="dark" items={items} />
		</>
	);
};

export default LayoutMenu;
