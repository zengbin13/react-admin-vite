import { Button, Form, Input } from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { loginApi } from '@/api/modules/login';

function LoginForm() {
	const [form] = Form.useForm();

	const [loading, setLoading] = useState<boolean>(false);
	const onFinish = async (values: any) => {
		try {
			setLoading(true);
			const res = await loginApi(values);
			console.log(res);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Form
			name="normal_login"
			form={form}
			initialValues={{
				remember: true
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
					Log in
				</Button>
			</Form.Item>
		</Form>
	);
}

export default LoginForm;
