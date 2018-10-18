import Taro, { Component } from '@tarojs/taro';
import { Provider } from '@tarojs/redux';
import zoro from '@opcjs/zoro';
import counter from './models/counter';
import Index from './pages/index/presenter';

const app = zoro();
app.model(counter);

const store = app.start(false); // 启动并创建store, 阻止默认初始化动作

class App extends Component {
  config = {
    pages: [
      'pages/components-demo/presenter',
      'pages/components-demo/counter/presenter',
      'pages/components-demo/medical-card/presenter'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#39bd8a',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'white'
    },
    debug: false
  };

  componentWillMount() {
    app.setup(); // 启动初始化
  }

  render() {
    return <Index />;
  }
}

Taro.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
