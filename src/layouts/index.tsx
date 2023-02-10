import React from 'react';
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;
import styled from './index.module.less';

import { useAppSelector } from '@/redux';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';
import { Outlet } from 'react-router-dom';

const LayoutIndex: React.FC = () => {
	const isCollapse = useAppSelector(state => state.menu.isCollapse);
	const { isDark } = useAppSelector(state => state.global.themeConfig);

	return (
		<Layout hasSider className={styled.root}>
			<Sider collapsed={isCollapse} width={208} theme={isDark ? 'dark' : 'dark'}>
				<LayoutMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<Content>
					<Outlet />
				</Content>
				<Footer className="footer">Footer</Footer>
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
