import React from 'react';
import { Layout } from 'antd';
const { Footer, Sider, Content } = Layout;
import styled from './index.module.scss';

import { useAppSelector } from '@/redux';
import LayoutMenu from './components/Menu';
import LayoutHeader from './components/Header';

const contentStyle: React.CSSProperties = {
	textAlign: 'center',
	minHeight: 120,
	lineHeight: '120px',
	color: '#fff',
	backgroundColor: '#108ee9'
};

const footerStyle: React.CSSProperties = {
	textAlign: 'center',
	color: '#fff',
	backgroundColor: '#7dbcea'
};

const LayoutIndex: React.FC = () => {
	const isCollapse = useAppSelector(state => state.menu.isCollapse);

	return (
		<Layout hasSider={true} className={styled.root}>
			<Sider collapsed={isCollapse} theme="dark">
				<LayoutMenu />
			</Sider>
			<Layout>
				<LayoutHeader />
				<Content style={contentStyle}>Content</Content>
				<Footer style={footerStyle}>Footer</Footer>
			</Layout>
		</Layout>
	);
};

export default LayoutIndex;
