import Taro, { Component } from '@tarojs/taro';
import { View, Text, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux';
import { dispatcher } from '@opcjs/zoro';
import * as MODELS from '../../../constants/models';
import Counter from '../../../components/counter/presenter';

const counterDispatcher = dispatcher[MODELS.MODEL_COUNTER];

@connect(state => ({
  count: state[MODELS.MODEL_COUNTER].count,
  todos: state[MODELS.MODEL_COUNTER].todos
}))
export default class CounterDemo extends Component {
  config = {
    navigationBarTitleText: '计数器demo'
  };

  add = () => {
    counterDispatcher.add();
  };

  dec = () => {
    counterDispatcher.dec();
  };

  queryTodoList = () => {
    counterDispatcher.queryTodoList();
  };

  render() {
    return (
      <View>
        <Counter count={this.props.count} onAdd={this.add} onDec={this.dec} />
        <View style="height: 5px" />
        <Button onClick={this.queryTodoList}>异步加载后台数据</Button>
        {this.props.todos.map(item => {
          return (
            <View key={item.id}>
              <Text key={item.id}>{item.userId}/{item.title}/{item.completed}</Text>
            </View>
          );
        })}
      </View>
    );
  }
}
