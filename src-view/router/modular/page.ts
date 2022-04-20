import index from '@/views/pages/index/index';

const Router: Route[] = [
  {
    path: '/',
    name: '首页',
    component: index
  },
  {
    path: '/about',
    name: '关于',
    component: () => import('@/views/pages/about/index')
  }
];

export default Router;
