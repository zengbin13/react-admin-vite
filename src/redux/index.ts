import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

// 1.使用configureStore创建空的store
// 2. <Provider>包裹<App/>使用store数据
// 3.使用createSlice创建redux切片并导出reducer函数
// 4.将切片的reducer函数添加到store中
// 5.组件中使用或操作redux状态 useSlector 使用状态  useDispatch 操作状态
// 6.定义Hooks类型 - 见下

import globalReducer from './modules/global';
import menuReducer from './modules/menu';

const store = configureStore({
	reducer: {
		global: globalReducer,
		menu: menuReducer
	}
});

//定义Hooks类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
