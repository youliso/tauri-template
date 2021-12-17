import { h, Component } from '@/common/h';
import indexCss from './scss/index.lazy.scss';

export default class Head extends Component {
  styles = [indexCss];

  render() {
    return (
      <div class="head-info drag">
        <div class="content">
          <div class="title">demo</div>
        </div>
      </div>
    );
  }
}
