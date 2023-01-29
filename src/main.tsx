import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 样式文件优先级 重置 > UI组件 > 全局样式
import 'reset-css';
import 'antd/dist/reset.css';
import '@/styles/global.scss';

// redux
import store from '@/redux';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>
);
