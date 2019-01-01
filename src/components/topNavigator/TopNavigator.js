//@flow
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedButton from './components/animatedButton/AnimatedButton';
import type {Props} from './types';
import {styles} from './styles';

const TopNavigator = (props: Props) => (
  <View style={props.containerStyle}>
    <TouchableOpacity onPress={() => props.onLeftIconPress()}>
      <Icon name={props.leftIconName} size={props.leftIconSize} color={props.leftIconColor} />
    </TouchableOpacity>
    <Text style={{color: 'white'}}>{props.titleText}</Text>
    {props.rightIconName !== '' ? (
      <AnimatedButton
        onIconPress={props.onRightIconPress}
        iconColor={props.rightIconColor}
        iconName={props.rightIconName}
        iconSize={props.rightIconSize}
        isAnimated={props.animated}
      />
    ) : (
      <View />
    )}
  </View>
);

TopNavigator.defaultProps = {
  animated: false,
  containerStyle: styles.container,
  leftIconName: 'ios-menu',
  onLeftIconPress: () => {},
  leftIconSize: 20,
  leftIconColor: '#fff',
  rightIconName: 'ios-refresh',
  onRightIconPress: () => {},
  rightIconSize: 15,
  rightIconColor: '#fff',
  titleStyle: styles.titleStyle
};

export default TopNavigator;
