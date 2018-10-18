import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import { PropTypes } from 'nervjs';
import IMAGES from '../../constants/images';
import './style.scss';

/**
 * @author andy.qin
 * @description 就诊卡组件
 */
export default class MedicalCard extends Component {
  render() {
    return (
      <View className="container">
        <Text className="item name">{this.props.name}</Text>
        <Text className="item text">{this.props.age}岁</Text>
        <Text className="item text">{this.props.gender}</Text>
        <View className="item flagItem">
          {this.props.isDefault === true ? <Image src={IMAGES.default_flag} className="defaultIcon" /> : null}
          {this.props.isChild === true ? <Image src={IMAGES.child_flag} className="icon" /> : null}
        </View>
        <View className="item idItem">
          <Image src={IMAGES.id_card} className="icon" />
          <Text className="text">{this.props.idCard}</Text>
        </View>
        <View className="item">
          <Image src={IMAGES.med_card} className="icon" />
          <Text className="text textBottom">{this.props.medCard}</Text>
        </View>
      </View>
    );
  }
}

MedicalCard.propTypes = {
  name: PropTypes.string, // 姓名
  age: PropTypes.number, // 年龄
  gender: PropTypes.string, // 性别
  idCard: PropTypes.string, // 身份证
  medCard: PropTypes.string, //就诊卡号
  isDefault: PropTypes.bool, //是否为默认卡
  isChild: PropTypes.bool //是否为儿童
};
