import Router from '@/router';
import { HashRouter } from 'react-router-dom';
import AuthRouter from '@/router/utils/authRouter';
import { ConfigProvider } from 'antd';
import useTheme from './hooks/useTheme';

function App() {
	const { algorithm } = useTheme();
	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					algorithm
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
