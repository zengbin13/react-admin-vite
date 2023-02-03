import Icon from '@ant-design/icons';
import { ReactComponent as LogoSvg } from '@/assets/images/logo.svg';
import { useAppSelector } from '@/redux';

const MenuLogo = () => {
	const isCollapse = useAppSelector(state => state.menu.isCollapse);
	return (
		<div className="menu-logo">
			{/* <LogoSvg></LogoSvg> 可直接使用 */}
			<Icon component={LogoSvg} style={{ fontSize: '32px' }} />
			{isCollapse ? null : <span className="title">React</span>}
		</div>
	);
};

export default MenuLogo;
