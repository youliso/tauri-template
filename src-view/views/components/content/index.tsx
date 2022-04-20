import { ChildRoute } from '@/common/router';
import test1 from './test1';
import test2 from './test2';

export default new ChildRoute(
  {
    test1: new test1(),
    test2: new test2()
  },
  'test1',
  <div class="content"></div>,
  'testPath'
);
