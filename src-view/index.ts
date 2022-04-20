import GlobalComponent from '@/common/globalComponent';
import router from '@/router';
import '@/views/style';

GlobalComponent.use(import('@/views/components/head'), 'Head').then(() =>
  router.init(window.location.pathname)
);
