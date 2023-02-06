import Router from '@/router';
import { HashRouter } from 'react-router-dom';
import AuthRouter from '@/router/utils/authRouter';
import { ConfigProvider, theme } from 'antd';

function App() {
	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					algorithm: theme.defaultAlgorithm
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
