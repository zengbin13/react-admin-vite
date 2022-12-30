import http from '@/api';

/**
 * @name: 登录模块
 */

interface LoginForm {
	account: string;
	password: string;
}

export const loginApi = (data: LoginForm) => {
	return http.post('/login', data);
};
