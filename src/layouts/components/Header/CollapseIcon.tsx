import { useAppSelector, useAppDispatch } from '@/redux';
import { updateCollapse } from '@/redux/modules/menu';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
const CollapseIcon = () => {
	const isCollapse = useAppSelector(state => state.menu.isCollapse);
	const dispatch = useAppDispatch();

	return (
		<div
			className="icon"
			onClick={() => {
				dispatch(updateCollapse(!isCollapse));
			}}
		>
			{isCollapse ? <MenuUnfoldOutlined /> : <MenuFoldOutlined className="icon" />}
		</div>
	);
};

export default CollapseIcon;
