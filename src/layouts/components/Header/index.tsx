import { Layout } from 'antd';
import styled from './index.module.less';
import CollapseIcon from './CollapseIcon';
// import BreadcrumbNav from './BreadcrumbNav';
import useTheme from '@/hooks/useTheme';
import Theme from './Theme';
const LayoutHeader = () => {
	const { token } = useTheme();
	return (
		<Layout.Header className={styled.root} style={{ backgroundColor: token.colorBgContainer }}>
			{/* 折叠按钮 */}
			<CollapseIcon />
			{/* 面包屑导航 */}
			{/* <BreadcrumbNav /> */}
			<div className="breadcrumb">BreadcrumbNav</div>
			{/* 切换暗黑模式 */}
			<div className="right-panel">
				<Theme></Theme>
			</div>
		</Layout.Header>
	);
};

export default LayoutHeader;
