import { Counter, Employees, Home } from '../pages';

const routes: IRoute[] = [
  {
    name: 'Home',
    path: '/',
    isExact: true,
    component: Home,
  },
  {
    name: 'Counter',
    path: '/counter',
    component: Counter,
  },
  {
    name: 'Employees',
    path: '/employees',
    component: Employees,
  },
];

export default routes;
