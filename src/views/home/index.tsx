import { Button } from 'antd';
import style from './index.module.less';
import classNames from 'classnames';

const Home = () => {
	return (
		<div className={classNames(style.root, 'container')}>
			<Button type="primary">Home</Button>
		</div>
	);
};

export default Home;
