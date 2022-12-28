# react-admin-vite

## 初始化项目

```bash
yarn create vite react-admin-vite --template react-ts
```

参考项目：[Hooks-Admin 🚀](https://github.com/HalseySpicy/Hooks-Admin)

### 配置初始化

```bash
yarn add @types/node -D
```

#### 路径别名

```ts
// vite.config.ts
resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
}
```

#### 路径提示

```json
// tsconfig.json
"compilerOptions": {
    // 解析非相对模块名的基准目录
    "baseUrl": "./",
     // 模块名到基于 baseUrl的路径映射的列表。
    "paths": {
      "@/*": [ "src/*" ],
      "@": [ "src" ]
    }
}
```

### 代码规范初始化



### 样式初始化

```bash
yarn add reset-css antd 
yarn add sass -D
```

```tsx
// 样式文件优先级 重置 > UI组件 > 全局样式
import 'reset-css';
import 'antd/dist/reset.css';
import '@/styles/global.scss';
```

#### 首屏loading

由于`chunk.js`体积较大首页将会白屏，可在`index.html`应用根节点加载loading动画

```html
<div id="root">
	<style>
        .first-loading-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
        }
	 </style>
	<div class="first-loading-wrap">
		<div class="loading-wrap">
			<span class="dot dot-spin">
            	<i></i>
            	<i></i>
           		<i></i>
            	<i></i>
           </span>
        </div>
	</div>
</div>

```



#### 使用 tailwind

```bash
yarn add tailwindcss postcss autoprefixer -D
npx tailwindcss init -p
```

```js
// tailwind.config.cjs

/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  important: true,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

```css
/* index.css */
@tailwind base; 
/* 存在UI框架按钮透明bug */
@tailwind components;
@tailwind utilities;
```



## 路由

```bash
yarn add react-router-dom
```

### 基础路由

```tsx
const rootRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Navigate to='/login' />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
];

const Router = () => {
  // useRoutes 功能上相当于<Routes> 返回渲染路由树的React元素
  const element = useRoutes(rootRoutes);
  return element;
};
export default Router;
```

```tsx
// App.tsx
<HashRouter>
   <Router />
</HashRouter>
```



### 路由懒加载

按需使用 `React.lazy()` 和动态 `import()`, 将非首页展示页面抽离到其他包，降低首屏加载时间

```tsx
// React.Suspense 属性fallback指定加载指示器防止子组件尚未准备
// React.lazy  动态加载组件缩减 bundle 的体积

const lazyLoad = (Comp: React.ComponentType<any>): React.ReactNode => {
  return (
    <Suspense fallback={
    	<Spin size='large' className="center"/>
    }>
      <Comp />
    </Suspense>
  );
};

 ...
 
const errorRoutes: Array<RouteObject> = [
  {
    path: '/403',
    element: lazyLoad(
        React.lazy(
            () => import('@/components/errorMessage/403')
        )
    ),
  },
];
```



### 模块化管理路由

使用 [import.meta.glob](https://cn.vitejs.dev/guide/migration-from-v2.html#general-changes) 导入路由模块

```tsx
// 导入所有routes模块
const routeModules = import.meta.glob('./modules/*.tsx', { eager: true });

// 处理路由
const routesArray: RouteObject[] = [];
Object.keys(routeModules).forEach(
    (item) => {
        routesArray.push(...(routeModules[item] as { default: RouteObject[] }).default);
	}
);

export const rootRouter: RouteObject[] = [
  ...其他
  ...routesArray,
  {
    path: '*',
    element: <Navigate to='/404' />,
  },
];
```

