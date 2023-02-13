import { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import MenuLogo from './component/Logo';
import ReactIcon from '@/components/ReactIcon';
import { RobotOutlined } from '@ant-design/icons';
import { getMenuListApi } from '@/api/modules/menu';
import { useAppDispatch, useAppSelector } from '@/redux';
import { setMenuList as setReduxMenuList } from '@/redux/modules/menu';
import { useNavigate } from 'react-router-dom';
import { searchRoute } from '@/utils/utils';
// import { layoutMenuList } from '@/router';
import { RouteMenuObject } from '@/router/interface';
import { AUTHENTICATION, HOME_URL } from '@/config/config';
import styled from './index.module.less';

const layoutMenuList: RouteMenuObject[] = [];

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
	const dispatch = useAppDispatch();
	const { menuList: reduxMenuList } = useAppSelector(state => state.menu);
	const { isDark } = useAppSelector(state => state.global.themeConfig);
	const navigate = useNavigate();

	//菜单目录
	const [items, setItems] = useState<MenuItem[]>([]);
	// 获取动态图标
	const getIcon = (icon?: React.ReactNode): React.ReactNode => {
		if (typeof icon == 'string') return <RobotOutlined />;
		return icon;
		return <ReactIcon type={'icon-home'} style={{ color: '#a6adb4', fontSize: '18px' }}></ReactIcon>;
	};

	// 处理数据为antd menu需要的格式
	const deepLoopFloat = (list: RouteMenuObject[], newArr: MenuItem[] = []): MenuItem[] => {
		list.forEach(item => {
			// 处理无meta的布局组件 - 类型保护 in
			if (!('meta' in item)) {
				item = item.children[0];
			}
			// 处理menu
			if (!item?.children?.length) {
				if (item.meta.hidden) return; //隐藏的图标
				return newArr.push(getItem(item.meta.title, item.meta.key, getIcon(item.meta.icon)));
			}
			newArr.push(getItem(item.meta.title, item.meta.key, getIcon(item.meta.icon), deepLoopFloat(item.children)));
		});
		return newArr;
	};

	// 获取菜单目录
	const getMenuList = async () => {
		const data = AUTHENTICATION == 'all' ? await getMenuListApi() : layoutMenuList;
		console.log(data, 'data');
		setItems(deepLoopFloat(data));
		dispatch(setReduxMenuList(data));
	};

	// AUTHENTICATION
	// 跳转路由
	const menuClick: MenuProps['onClick'] = info => {
		const route = searchRoute(info.key, reduxMenuList);
		if (!route) return;
		navigate(route.path || HOME_URL);
	};

	useEffect(() => {
		getMenuList();
	}, []);

	return (
		<div className={styled.root}>
			<MenuLogo></MenuLogo>
			<Menu mode="inline" theme={isDark ? 'dark' : 'dark'} items={items} onClick={menuClick} />
		</div>
	);
};

export default LayoutMenu;
