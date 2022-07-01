import router from '@/router';
import { index } from './style';

export default class About {
  render() {

    return (
      <div class={index}>
        <div class="text">关于</div>
        <button onClick={() => router.push('/')}>首页</button>
      </div>
    );
  }
}
