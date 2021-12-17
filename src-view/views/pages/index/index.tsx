import { h, View } from '@/common/h';
import { testProxy, testProxyRemove } from '@/store';
import Router from '@/router';
import { dateFormat } from '@/utils';
import indexCss from './scss/index.lazy.scss';

export default class Home extends View {
  private testData: ProxyValue<string> | undefined;
  private testInterval: NodeJS.Timer | undefined;
  styles = [indexCss];

  onLoad() {}

  onReady() {}

  onUnmounted() {
    if (this.testData) testProxyRemove();
    if (this.testInterval) clearInterval(this.testInterval);
  }

  testRender() {
    const test = <div class="text"></div>;
    this.testData = testProxy(dateFormat(), test);
    test.textContent = dateFormat();
    this.testInterval = setInterval(() => {
      (this.testData as ProxyValue<string>).value = dateFormat();
    }, 1000);
    return test;
  }

  render() {
    return (
      <div class="info">
        {this.testRender()}
        <button class="but" onClick={() => Router.push('/about')}>
          关于
        </button>
      </div>
    );
  }
}
