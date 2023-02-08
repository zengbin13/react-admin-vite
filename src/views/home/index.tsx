import { Button } from 'antd';
import style from './index.module.less';

const Home = () => {
	return (
		<div className={style.root}>
			<Button type="primary">Home</Button>
			<div className="title">xxx</div>
		</div>
	);
};

export default Home;
