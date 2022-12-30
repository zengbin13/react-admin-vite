import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { AxiosCanceler } from './helper/axiosCancel';
import { showFullScreenLoading, tryHideFullScreenLoading } from './helper/serviceLoading';
import NProgress from '@/config/nprogress';
import type { ResultData } from './interface';

const axiosCanceler = new AxiosCanceler();

class RequestHttp {
	service: AxiosInstance;
	constructor(config: AxiosRequestConfig) {
		// 实例化axios
		this.service = axios.create(config);

		/**
		 * @description: 请求拦截器
		 * 客户端发送请求 -> [请求拦截器] -> 服务器
		 * token校验(JWT) : 接受服务器返回的token,存储到redux/本地储存当中
		 */
		this.service.interceptors.request.use(
			(config: AxiosRequestConfig) => {
				// 1.开启进度条
				console.log(config, 'config');

				NProgress.start();
				// 2.将当前请求添加到 pending 中
				axiosCanceler.addPending(config);
				// 3.是否展示全屏loading
				config.headers!.fullLoading || showFullScreenLoading();
				return config;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);
		/**
		 * @description: 响应拦截器
		 * 服务器换返回信息 -> [拦截统一处理] -> 客户端JS获取到信息
		 */
		this.service.interceptors.response.use(
			(response: AxiosResponse) => {
				const { data, config } = response;

				// 1.关闭进度条
				NProgress.done();
				// 2.请求结束移除本次请求
				axiosCanceler.removePending(config);
				// 3.关闭全屏loading
				tryHideFullScreenLoading();

				return data;
			},
			(error: AxiosError) => {
				return Promise.reject(error);
			}
		);
	}
	get<T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<ResultData<T>> {
		return this.service.get(url, config);
	}
	post<T, D>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<ResultData<T>> {
		return this.service.post(url, data, config);
	}
	put<T, D>(url: string, data: D, config?: AxiosRequestConfig<D>): Promise<ResultData<T>> {
		return this.service.put(url, data, config);
	}
	delete<T, D>(url: string, config?: AxiosRequestConfig<D>): Promise<ResultData<T>> {
		return this.service.delete(url, config);
	}
}

const config: AxiosRequestConfig = {
	// 默认地址请求地址，可在 .env 开头文件中修改
	baseURL: import.meta.env.VITE_API_URL,
	// 设置超时时间（10s）
	timeout: 10000,
	headers: {
		fullLoading: false
	}
};
export default new RequestHttp(config);
