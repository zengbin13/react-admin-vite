import styles from './index.module.less';
import loginLeftImg from '@/assets/images/login_left.png';
// import logoImg from '@/assets/images/logo.png';

import LoginForm from './components/LoginForm';
function Login() {
	return (
		<div className={styles.root}>
			<div className="container">
				<div className="left">
					<img src={loginLeftImg} alt="login" />
				</div>
				<div className="right">
					<div className="login-form">
						<div className="login-logo">
							{/* <img className="login-icon" src={logoImg} alt="logo" /> */}
							<span className="logo-text">hello !</span>
						</div>
						<LoginForm />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Login;
