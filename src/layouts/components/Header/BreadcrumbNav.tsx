import { HOME_URL } from '@/config/config';
import { useAppSelector } from '@/redux';
import { RouteMenuObject } from '@/router/interface';
import { Breadcrumb, BreadcrumbProps } from 'antd';
import { Link, useLocation } from 'react-router-dom';
type Route = Required<BreadcrumbProps>['routes'][number];
type ItemRender = Required<BreadcrumbProps>['itemRender'];

const getRoutes = (list: RouteMenuObject[], newArr: Route[] = []): Route[] => {
	list.forEach(item => {
		if (!item.children?.length)
			return newArr.push({
				path: item.path || HOME_URL,
				breadcrumbName: item.meta.title
			});
		newArr.push({
			path: item.path || HOME_URL,
			breadcrumbName: item.meta.title,
			children: getRoutes(item.children)
		});
	});
	return newArr;
};

const BreadcrumbNav = () => {
	const { pathname } = useLocation();
	console.log(pathname);

	const { menuList: reduxMenuList } = useAppSelector(state => state.menu);
	const routes = getRoutes(reduxMenuList);

	console.log(routes, 'routes');

	const itemRender: ItemRender = (route, params, routes, paths) => {
		const last = routes.indexOf(route) === routes.length - 1;
		return last ? <span>{route.breadcrumbName}</span> : <Link to={paths.join('/')}>{route.breadcrumbName}</Link>;
	};

	return (
		<div className="breadcrumb">
			<Breadcrumb itemRender={itemRender} routes={routes} />;
		</div>
	);
};

export default BreadcrumbNav;
