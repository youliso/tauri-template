import router from '@/router';
import { useDV } from 'ym-web';
import { index } from './style';
import contentR from '@/views/components/content';

export default class About {
  onLoad(parame: ViewParameters) {
    router.routerState(contentR.load(parame));
  }

  render() {
    const [data, view] = useDV(0);

    return (
      <div class={index}>
        {contentR.render()}
        <div class="text">关于</div>
        <button onClick={() => router.routerState(contentR.to('test1'))}>test1</button>
        <button onClick={() => router.routerState(contentR.to('test2'))}>test2</button>
        <button onClick={() => router.push('/')}>首页</button>
        <button onClick={() => data.value++}>{view}</button>
      </div>
    );
  }
}
