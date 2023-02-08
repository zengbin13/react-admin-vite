import { Layout } from 'antd';
import styled from './index.module.less';
import CollapseIcon from './CollapseIcon';
// import BreadcrumbNav from './BreadcrumbNav';
import { Switch } from 'antd';
import { useAppSelector } from '@/redux';
import useTheme from '@/hooks/useTheme';

const LayoutHeader = () => {
	const { isDark } = useAppSelector(state => state.global.themeConfig);

	const { token, updateDarkTheme } = useTheme();
	return (
		<Layout.Header className={styled.root} style={{ backgroundColor: token.colorBgContainer }}>
			{/* 折叠按钮 */}
			<CollapseIcon />
			{/* 面包屑导航 */}
			{/* <BreadcrumbNav /> */}
			<div className="breadcrumb">BreadcrumbNav</div>
			{/* 切换暗黑模式 */}
			<Switch checked={isDark} onChange={updateDarkTheme} />
		</Layout.Header>
	);
};

export default LayoutHeader;
