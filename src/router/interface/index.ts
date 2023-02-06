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
export type RouteMenuObject = RouteLayoutMenuObject | RouteMetaMenuObject;

export interface RouteLayoutMenuObject {
	element: React.ReactNode;
	children: [RouteMetaMenuObject];
}

export interface RouteMetaMenuObject {
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
