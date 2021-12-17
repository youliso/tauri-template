import Store from '@/common/store';

export function testProxy(date: string, el: HTMLElement) {
  return Store.setProxy('test', date, (value) => (el.textContent = value));
}

export function testProxyRemove() {
  Store.removeProxy('test');
}