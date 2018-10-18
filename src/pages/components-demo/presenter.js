import Taro, { Component } from '@tarojs/taro';
import { View, Button } from '@tarojs/components';
import * as PAGES from '../../constants/pages';

export default class Demo extends Component {
  config = {
    navigationBarTitleText: '组件演示'
  };

  goto = src => {
    Taro.navigateTo({
      url: '/' + src
    });
  };

  render() {
    return (
      <View className="index">
        <Button onClick={this.goto.bind(this, PAGES.PAGE_COMPONENTS_DEMO_COUNTER.toString())}>计数器演示</Button>
        <Button onClick={this.goto.bind(this, PAGES.PAGE_COMPONENTS_DEMO_MEDICAL_CARD.toString())}>就诊卡演示</Button>
      </View>
    );
  }
}
