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

#### 首屏 loading

由于`chunk.js`体积较大首页将会白屏，可在`index.html`应用根节点加载 loading 动画

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
		extend: {}
	},
	plugins: []
};
```

```css
/* index.css */
@tailwind base;
/* 存在UI框架按钮透明bug */
@tailwind components;
@tailwind utilities;
```

## 代码规范配置

### eslint 检测代码规范

#### 初始化 eslint 配置

```bash
yarn add eslint -D
npx eslint --init
or
npm init @eslint/config
```

根据选择生成`.eslintrc.cjs` 将会安装 `eslint-plugin-react  @typescript-eslint/eslint-plugin @typescript-eslint/parser`

#### 忽略规则`.eslintignore` 

```bash
*.sh
node_modules
*.md
*.woff
*.ttf
.vscode
.idea
dist
/public
/docs
.husky
.local
/bin
.eslintrc.js
*.config.js
vite.config.ts
```

#### 校验 hooks 规则

```bash
yarn add eslint-plugin-react-hooks -D
```

```json
{
	"plugins": [
		// ...
		"react-hooks"
	],
	"extends": [
		// ...
		"plugin:react/jsx-runtime",
		"plugin:react-hooks/recommended"
	],
	"rules": {
		// ...
		"react-hooks/rules-of-hooks": "error",
		"react-hooks/exhaustive-deps": "warn"
	}
}
```

#### 使用 airbnb 规则校验（可选）

```
yarn add eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y -D
yarn add eslint-config-airbnb-typescript -D
```

[详见](https://juejin.cn/post/7071124270595702797)

#### eslint 指令

```json
"lint:eslint": "eslint --fix --ext .js,.ts,.tsx ./src",
```

### prettier 统一代码风格

#### 初始化 prettier 配置

```bash
yarn add prettier eslint-config-prettier eslint-plugin-prettier -D
```

- [eslint-plugin-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-plugin-prettier)： 基于 prettier 代码风格的 eslint 规则，即eslint使用pretter规则来格式化代码
- [eslint-config-prettier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fprettier%2Feslint-config-prettier)： 禁用所有与格式相关的 eslint 规则，解决 prettier 与 eslint 规则冲突，**确保将其放在 extends 队列最后，覆盖其他配置**

#### 配置文件 `.prettierrc.cjs`

```js
module.exports = {
	semi: false,
	tabWidth: 2,
	singleQuote: true,
	trailingComma: 'es5'
};
```

#### 忽略规则 `.prettierignore`

```
/dist/*
.local
/node_modules/**

**/*.svg
**/*.sh

/public/*
```

#### 解决冲突 `eslint-config-prettier`

```js
// .eslintrc.js
{
  plugins: [
     //...
  	"prettier"
  ],
  extends:[
    // 解决 eslint 和 prettier 的冲突 , 此项配置必须在最后
    "prettier",
	"plugin:prettier/recommended"
  ]
}
```

#### prettier 指令

```json
"lint:prettier": "prettier --write --loglevel warn \"src/**/*.{js,ts,json,tsx,css,less,scss,html,md}\"",
```

### stylelint 格式化css代码

```bash
yarn add stylelint stylelint-config-standard stylelint-config-prettier stylelint-scss stylelint-config-recess-order -D
```

- `stylelint-config-standard`:  stylelint标准可共享配置规则
- `stylelint-config-prettier`: 配置 stylelint 和 prettier 兼容
- `stylelint-scss`：用于stylelint的scss检测规则的集合
- `stylelint-config-recess-order`： 使用[Recess](https://github.com/twitter/recess/blob/29bccc870b7b4ccaa0a138e504caf608a6606b59/lib/lint/strict-property-order.js) 方式进行样式排序

#### 配置文件`.stylelintrc.js`

```js
module.export = {
	extends: [
		'stylelint-config-standard', 
		'stylelint-config-prettier', 
		'stylelint-config-recess-order' 
	],
	plugins: ['stylelint-scss'],
    rule: {
        indentation: null, // 指定缩进空格
    }
};

```

#### 忽略规则 .stylelintignore

```
/dist/*
/public/*
public/*
```

#### stylelint 指令

```json
"lint:stylelint": "stylelint --cache --fix \"**/*.{less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/",
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
		element: <Navigate to="/login" />
	},
	{
		path: '/login',
		element: <Login />
	},
	{
		path: '*',
		element: <Navigate to="/404" />
	}
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
