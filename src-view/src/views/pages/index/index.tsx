import router from '@/router';
import { index } from './style';

export default class {
  private testInterval: number | undefined;

  onReady() {}

  onUnmounted() {
    if (this.testInterval) clearInterval(this.testInterval);
  }

  render() {
    return (
      <div class={index}>
        <h1>hello vanilla</h1>
      </div>
    );
  }
}
