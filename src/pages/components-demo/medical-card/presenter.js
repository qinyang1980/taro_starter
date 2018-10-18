import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import MedicalCard from '../../../components/medical-card/presenter';
import mock from '../../../services/mock.json';

export default class MedicalCardDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardList: mock.medCardList
    };
  }

  config = {
    navigationBarTitleText: '就诊卡demo'
  };

  render() {
    return (
      <View style="height: 100vh; background-color: #f5f5f5">
        <View style="height: 5px" />
        {this.state.cardList.map(item => {
          return (
            <View key={item.id}>
              <MedicalCard
                name={item.name}
                age={item.age}
                gender={item.gender}
                idCard={item.idCard}
                medCard={item.medCard}
                isDefault={item.isDefault}
                isChild={item.isChild}
              />
            </View>
          );
        })}
      </View>
    );
  }
}
