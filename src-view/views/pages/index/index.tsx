import router from '@/router';
import { windowShow } from '@/common/window';
import { index } from './style';

export default class {
  private testInterval: number | undefined;

  onReady() {
    windowShow();
  }

  onUnmounted() {
    if (this.testInterval) clearInterval(this.testInterval);
  }

  render() {
    return (
      <div class={index}>
        <div class="title">hello vanilla</div>
        <button class="but" onClick={() => router.push('/about?data=2')}>
          关于
        </button>
      </div>
    );
  }
}
