import { useDV } from '@/common/proxy';

import { head } from './style';

export default class {
  // 获取点击dom
  test(e: MouseEvent) {
    const el = document.elementFromPoint(e.pageX, e.pageY);
    console.log(el);
  }

  render() {
    const [data, view] = useDV(Date());
    setInterval(() => {
      data.value = Date();
    }, 1000);
    return (
      <div class={head}>
        <div class="content">
          <div class="title" onClick={this.test}>
            demo - {view}
          </div>
        </div>
      </div>
    );
  }
}
