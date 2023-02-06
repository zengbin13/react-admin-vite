import { Layout } from 'antd';
import styled from './index.module.scss';
import CollapseIcon from './CollapseIcon';
// import BreadcrumbNav from './BreadcrumbNav';

const LayoutHeader = () => {
	return (
		<Layout.Header className={styled.root}>
			{/* 折叠按钮 */}
			<CollapseIcon />
			{/* 面包屑导航 */}
			{/* <BreadcrumbNav /> */}
			<div>BreadcrumbNav</div>
		</Layout.Header>
	);
};

export default LayoutHeader;
