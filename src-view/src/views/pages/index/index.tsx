import { show_main } from '@/common/window';
import { index } from './style';

export default class {
  onReady() {
    show_main();
  }

  render() {
    return (
      <div class={index}>
        <h1>hello vanilla</h1>
      </div>
    );
  }
}
