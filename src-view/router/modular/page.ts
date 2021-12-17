const Router: Route[] = [
  {
    path: '/',
    name: '首页',
    component: () => import('@/views/pages/index/index')
  },
  {
    path: '/about',
    name: '关于',
    instance: true,
    component: () => import('@/views/pages/about/index')
  }
];

export default Router;
