import { defineConfig, UserConfig, ConfigEnv, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

import { resolve } from 'path';
import { wrapperEnv } from './src/utils/getEnv';

// ant组件颜色变量注入scss
import { theme } from 'antd';
const { defaultAlgorithm, defaultSeed, darkAlgorithm } = theme;
const mapToken = darkAlgorithm(defaultSeed);
console.log(mapToken, 'mapToken');

// https://vitejs.dev/config/
export default defineConfig((configEnv: ConfigEnv): UserConfig => {
	// 加载环境变量
	const env = loadEnv(configEnv.mode, process.cwd());
	const viteEnv = wrapperEnv(env);

	return {
		base: '/', //公共基础路径
		resolve: {
			alias: {
				'@': resolve(__dirname, './src')
			}
		},
		server: {
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			// https: false,
			// 代理跨域
			proxy: {
				'/api': {
					target: viteEnv.VITE_API_URL,
					changeOrigin: true
					// rewrite: path => path.replace(/^\/api/, '')
				}
			}
		},
		css: {
			preprocessorOptions: {
				less: {
					javascriptEnabled: true,
					modifyVars: mapToken
				}
			}
		},
		plugins: [react(), svgr()]
	};
});
