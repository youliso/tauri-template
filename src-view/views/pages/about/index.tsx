import { h, View } from '@/common/h';
import Router from '@/router';
import indexCss from './scss/index.lazy.scss';

export default class About extends View {
  styles = [indexCss];

  count: number = 0;
  countDom: HTMLElement | undefined;

  onDeactivated() {
    // Router.unInstance(this.$name);
  }

  countAdd() {
    if (!this.countDom) {
      this.countDom = <span>{this.count}</span>;
      return;
    }
    this.count++;
    this.countDom.textContent = this.count.toString();
  }

  render() {
    this.countAdd();
    return (
      <div class="info">
        <div class="text">关于</div>
        <button onClick={() => Router.back()}>首页</button>
        <button onClick={() => this.countAdd()}>{this.countDom}</button>
      </div>
    );
  }
}
