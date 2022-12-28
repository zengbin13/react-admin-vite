export interface MateProps {
	key?: string;
	title?: string;
	requiresAuth?: boolean;
}

export interface RouteObject {
	path?: string;
	element?: React.ReactNode | null;
	meta?: MateProps;
	children?: RouteObject[];
}
