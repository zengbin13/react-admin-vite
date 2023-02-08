import Router from '@/router';
import { HashRouter } from 'react-router-dom';
import AuthRouter from '@/router/utils/authRouter';
import { ConfigProvider } from 'antd';
import useTheme from './hooks/useTheme';
import { useEffect } from 'react';

function App() {
	const { algorithm, getPrimatyColor, initTheme } = useTheme();
	useEffect(() => {
		initTheme();
	}, []);

	return (
		<HashRouter>
			<ConfigProvider
				theme={{
					token: {
						colorPrimary: getPrimatyColor()
					},
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
