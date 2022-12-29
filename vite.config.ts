import { defineConfig, UserConfig, ConfigEnv, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { wrapperEnv } from './src/utils/getEnv';

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
		plugins: [react()]
	};
});
