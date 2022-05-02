import { globalComponent } from 'ym-web';
import router from '@/router';
import '@/views/style';

globalComponent
  .use(import('@/views/components/head'), 'Head')
  .then(() => router.init(window.location.pathname));
