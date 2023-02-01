import { Layout } from 'antd';
import styled from './index.module.scss';
import CollapseIcon from './CollapseIcon';
const LayoutHeader = () => {
	return (
		<Layout.Header className={styled.root}>
			{/* 折叠按钮 */}
			<CollapseIcon />
		</Layout.Header>
	);
};

export default LayoutHeader;
