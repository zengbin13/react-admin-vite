import Router from '@/router';
import { HashRouter } from 'react-router-dom';
import AuthRouter from '@/router/utils/authRouter';
import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from './redux';

function App() {
	const { isDark } = useAppSelector(state => state.global.themeConfig);
	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					algorithm: isDark ? theme.defaultAlgorithm : theme.darkAlgorithm
				}}
			>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	);
}

export default App;
