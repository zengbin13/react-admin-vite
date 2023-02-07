import { Layout } from 'antd';
import styled from './index.module.less';
import CollapseIcon from './CollapseIcon';
// import BreadcrumbNav from './BreadcrumbNav';
import { Switch, theme } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux';
import { setDark } from '@/redux/modules/global';

const LayoutHeader = () => {
	const { isDark } = useAppSelector(state => state.global.themeConfig);
	const dispatch = useAppDispatch();
	const onChange = (checked: boolean) => {
		dispatch(setDark(checked));
	};

	const { token } = theme.useToken();
	return (
		<Layout.Header className={styled.root} style={{ backgroundColor: token.colorBgContainer }}>
			{/* 折叠按钮 */}
			<CollapseIcon />
			{/* 面包屑导航 */}
			{/* <BreadcrumbNav /> */}
			<div>BreadcrumbNav</div>
			{/* 切换暗黑模式 */}
			<Switch checked={isDark} onChange={onChange} />
		</Layout.Header>
	);
};

export default LayoutHeader;
