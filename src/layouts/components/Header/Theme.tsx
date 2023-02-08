import ReactIcon from '@/components/ReactIcon';
import { Drawer } from 'antd';
import { useState } from 'react';
import styled from './index.module.less';
import useTheme from '@/hooks/useTheme';
import { useAppSelector } from '@/redux';
const Theme = () => {
	const { updateDarkTheme, lightThemeList, updateLightTheme, getPrimatyColor } = useTheme();
	const themeName = useAppSelector(state => state.global.themeConfig.themeName);
	const [open, setOpen] = useState(false);

	const showDrawer = () => {
		setOpen(true);
	};

	const onClose = () => {
		setOpen(false);
	};

	return (
		<>
			<ReactIcon type="icon-outline-brush-3" className="icon" onClick={showDrawer} />
			<Drawer className={styled.drawer} title="主题配置" placement="right" onClose={onClose} open={open} width={300}>
				<div className="theme-item">
					<h4>主题风格设置</h4>
					<div className="content theme">
						<div className="light" onClick={() => updateLightTheme(themeName)}>
							亮色
						</div>
						<div className="dark" onClick={() => updateDarkTheme()}>
							暗黑
						</div>
					</div>
				</div>
				<div className="theme-item primary">
					<h4>主题色</h4>
					<ul className="content">
						{lightThemeList.map(theme => {
							return (
								<li
									key={theme}
									className="primary-item"
									style={{ backgroundColor: getPrimatyColor(theme) }}
									onClick={() => updateLightTheme(theme)}
								></li>
							);
						})}
					</ul>
				</div>
			</Drawer>
		</>
	);
};

export default Theme;
