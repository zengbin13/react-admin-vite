import Router from '@/router';
import { HashRouter } from 'react-router-dom';
import AuthRouter from '@/router/utils/authRouter';

function App() {
	return (
		<HashRouter>
			<AuthRouter>
				<Router />
			</AuthRouter>
		</HashRouter>
	);
}

export default App;
