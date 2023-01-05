import FullLoading from '@/components/FullLoading';
import { createRoot } from 'react-dom/client';
let needLoadingRequestCount = 0;

/**
 * @description: 开启loading
 */
export const showFullScreenLoading = () => {
	if (needLoadingRequestCount == 0) {
		//创建DOM节点
		const dom = document.createElement('div');
		dom.setAttribute('id', 'loading');
		document.body.appendChild(dom);
		createRoot(dom).render(<FullLoading></FullLoading>);
	}
	needLoadingRequestCount++;
};

/**
 * @description: 关闭loading
 */
export const tryHideFullScreenLoading = () => {
	if (needLoadingRequestCount <= 0) return;
	needLoadingRequestCount--;
	if (needLoadingRequestCount === 0) {
		document.body.removeChild(document.getElementById('loading') as HTMLElement);
	}
};
