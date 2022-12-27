import React, { Suspense } from 'react';
import { Spin } from 'antd';

// React.Suspense 属性fallback指定加载指示器防止子组件尚未准备
// React.lazy  动态加载组件缩减 bundle 的体积

const lazyLoad = (Comp: React.ComponentType<any>): React.ReactNode => {
  return (
    <Suspense
      fallback={
        <div className=''>
          <Spin size='large' />
        </div>
      }
    >
      <Comp />
    </Suspense>
  );
};

export default lazyLoad;
