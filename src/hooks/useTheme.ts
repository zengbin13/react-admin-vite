import { theme } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux';
import { setDark, setThemeName } from '@/redux/modules/global';
import { ThemeName } from '@/redux/interface';
const useTheme = () => {
	const { isDark, themeName } = useAppSelector(state => state.global.themeConfig);
	const dispatch = useAppDispatch();
	const lightThemeList: ThemeName[] = ['light', 'peach'];
	const getPrimatyColor = (theme: ThemeName = themeName) => {
		switch (theme) {
			case 'light':
				return '#1677ff';
			case 'peach':
				return '#ed4192';
			default:
				return '#1677ff';
		}
	};

	// antd 颜色变量token
	const { token } = theme.useToken();
	const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
	// 切换为暗黑模式
	const updateDarkTheme = () => {
		dispatch(setDark(true));
		document.body.setAttribute('theme', 'dark');
	};
	// 切换为亮色模式
	const updateLightTheme = (theme: ThemeName) => {
		dispatch(setDark(false));
		dispatch(setThemeName(theme));
		document.body.setAttribute('theme', theme);
	};
	const initTheme = () => {
		isDark ? updateDarkTheme() : updateLightTheme(themeName);
	};
	return { token, algorithm, updateDarkTheme, isDark, updateLightTheme, getPrimatyColor, lightThemeList, initTheme };
};

export default useTheme;
