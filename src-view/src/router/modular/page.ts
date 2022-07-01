import type { Route } from '@youliso/web-modules/types';
import index from '@/views/pages/index/index';

const Router: Route[] = [
  {
    path: '/',
    name: '首页',
    component: index
  }
];

export default Router;
