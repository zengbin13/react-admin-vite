import { Spin } from 'antd';
import styles from './index.module.scss';

function FullLoading({ tip = 'loading' }: { tip?: string }) {
	return (
		<div className={styles.root}>
			<Spin tip={tip} size="large"></Spin>
		</div>
	);
}

export default FullLoading;
