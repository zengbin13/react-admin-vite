import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { loginApi } from '@/api/modules/login';

function LoginForm() {
	// 通过 Form.useForm 对表单数据域进行交互
	const [form] = Form.useForm();

	// loading
	const [loading, setLoading] = useState<boolean>(false);
	//提交表单且数据验证成功后回调事件
	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			const { data } = await loginApi(values);
			console.log(data, 1111);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form
			name="normal_login"
			form={form}
			initialValues={{
				remember: true,
				account: '19100000001',
				password: '666888'
			}}
			size="large"
			onFinish={onFinish}
		>
			<Form.Item
				name="account"
				rules={[
					{
						required: true,
						message: 'Please input your Username!'
					}
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: 'Please input your Password!'
					}
				]}
			>
				<Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
					登录
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;