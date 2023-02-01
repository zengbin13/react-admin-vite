import { useLocation } from 'react-router-dom';

/**
 * @description: 路由守卫组件
 */
const AuthRouter = (props: { children: JSX.Element }) => {
	console.log('AuthRouter 路由守卫组件 render');
	const location = useLocation();
	console.log(location);

	return props.children;
};

export default AuthRouter;
