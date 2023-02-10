type CustomRequired<T, K extends keyof T> = {
	[P in K]-?: T[P];
} & Omit<T, K>;

export interface MateProps {
	key?: string;
	title?: string;
	requiresAuth?: boolean;
	hidden?: boolean;
	icon?: React.ReactNode;
}
export type RouteObject = RouteOriginObject | RouteMenuObject;
export type RouteMenuObject = RouteLayoutObject | RouteMetaObject;

export interface RouteLayoutObject {
	element: React.ReactNode;
	children: [RouteMetaObject];
}

export interface RouteMetaObject {
	path?: string;
	element?: React.ReactNode;
	meta: CustomRequired<MateProps, 'key' | 'title'>;
	children?: RouteMenuObject[];
}

export interface RouteOriginObject {
	path?: string;
	element?: React.ReactNode | null;
	meta?: MateProps;
	children?: RouteOriginObject[];
}

// export type MenuObject = MenuLayoutObject | MenuMateObject;
// export interface MenuLayoutObject {
// 	children: [RouteMetaObject];
// }
// export interface MenuMateObject {
// 	path?: string;
// 	meta: CustomRequired<MateProps, 'key' | 'title'>;
// 	children?: MenuMateObject[];
// }
