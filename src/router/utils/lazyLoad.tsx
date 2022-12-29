import React, { Suspense } from 'react';
import { Spin } from 'antd';

// React.Suspense 属性fallback指定加载指示器防止子组件尚未准备
// React.lazy  动态加载组件缩减 bundle 的体积

/**
 * @description 路由懒加载
 * @param {Element} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp: React.ComponentType<any>): React.ReactNode => {
	return (
		<Suspense fallback={<Spin size="large" className="tw-flex tw-justify-center tw-items-center tw-h-full " />}>
			<Comp />
		</Suspense>
	);
};

export default lazyLoad;
