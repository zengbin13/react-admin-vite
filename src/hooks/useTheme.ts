import { theme } from 'antd';
import { useAppDispatch, useAppSelector } from '@/redux';
import { setDark } from '@/redux/modules/global';

const useTheme = () => {
	const { isDark } = useAppSelector(state => state.global.themeConfig);
	const dispatch = useAppDispatch();
	document.body.setAttribute('theme', isDark ? 'dark' : 'light');

	// antd 颜色变量token
	const { token } = theme.useToken();
	const algorithm = isDark ? theme.darkAlgorithm : theme.defaultAlgorithm;
	// 切换暗黑模式
	const updateDarkTheme = () => {
		dispatch(setDark(!isDark));
		document.body.setAttribute('theme', isDark ? 'dark' : 'light');
	};
	return { token, algorithm, updateDarkTheme, isDark };
};

export default useTheme;
