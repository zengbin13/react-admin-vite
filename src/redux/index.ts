import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// 1.使用configureStore创建空的store
// 2. <Provider>包裹<App/>使用store数据
// 3.使用createSlice创建redux切片并导出reducer函数
// 4.将切片的reducer函数添加到store中
// 5.组件中使用或操作redux状态 useSlector 使用状态  useDispatch 操作状态
// 6.定义Hooks类型 - 见下

import globalReducer from './modules/global';
import menuReducer from './modules/menu';
const rootReducer = combineReducers({
	global: globalReducer,
	menu: menuReducer
});

// 持久化存储
const persistConfig = {
	key: 'root',
	storage
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 创建store
const store = configureStore({
	reducer: persistedReducer,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: false
		})
});

// 创建持久化store
export const persistor = persistStore(store);

//定义Hooks类型
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;

/**
 * action: 描述应用程序发生的事件，具有type字段 如：{type: 'todo/add', payload: 'buy milk'}
 * reducer: 接受事件/当前状态并返回最新状态处理函数 函数签名：(state, action) => newState
 * 					1.禁止直接修改state 2.禁止使用异步等副作用代码
 * store: 状态存储对象 通过reducer创建并具有getState方法
 * dispatch: 传入action事件触发状态更新  store.dispatch({type: 'todo/add', payload: 'buy milk'})
 * selector: 提取state片段  state => state.todo.list
 * combineReducers: 组合reducer
 */
