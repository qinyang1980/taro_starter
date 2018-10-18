import Taro, { Component } from '@tarojs/taro';
import { View, Button, Text} from '@tarojs/components';
import { PropTypes } from 'nervjs';
import './style.scss';

/**
 * @author andy.qin
 * @description 计数器组件
 */
export default class Counter extends Component {
  render() {
    const { count, onAdd, onDec } = this.props;

    return (
      <View className="wrapper">
        <Text className="text">{count}</Text>
        <Button className="btn1" onClick={onAdd}>+</Button>
        <Button className="btn2" onClick={onDec}>-</Button>
      </View>
    );
  }
}

/**
 * @param count : 计数器数值
 * @param add : 加法函数
 * @param dec : 减法函数
 */
Counter.propTypes = {
  count: PropTypes.string,
  onAdd: PropTypes.func,
  onDec: PropTypes.func
};
