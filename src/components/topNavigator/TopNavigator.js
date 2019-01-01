//@flow
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import type {Props} from './types';
import {styles} from './styles';

const TopNavigator = (props: Props) => (
  <View style={props.containerStyle}>
    <TouchableOpacity onPress={() => props.onLeftIconPress()}>
      <Icon name={props.leftIconName} size={props.leftIconSize} color={props.leftIconColor} />
    </TouchableOpacity>
    <Text style={{color: 'white'}}>{props.titleText}</Text>
    <TouchableOpacity onPress={() => props.onRightIconPress()}>
      <Icon name={props.rightIconName} size={props.rightIconSize} color={props.rightIconColor} />
    </TouchableOpacity>
  </View>
);

TopNavigator.defaultProps = {
  containerStyle: styles.container,
  leftIconName: 'ios-menu',
  onLeftIconPress: () => {},
  leftIconSize: 15,
  leftIconColor: '#fff',
  rightIconName: 'ios-refresh',
  onRightIconPress: () => {},
  rightIconSize: 15,
  rightIconColor: '#fff',
  titleStyle: styles.titleStyle
};

export default TopNavigator;
