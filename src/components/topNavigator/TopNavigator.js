//@flow
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AnimatedButton from './components/animatedButton/AnimatedButton';
import {styles} from './styles';
import type EStyleSheet from 'react-native-extended-stylesheet';

const hitSlop = {
  top: 20,
  bottom: 20,
  left: 20,
  right: 20
};

type Props = {
  animated: boolean,
  containerStyle: EStyleSheet,
  leftIconName: string,
  onLeftIconPress: () => void,
  leftIconSize: number,
  leftIconColor: string,
  rightIconName: string,
  onRightIconPress: () => void,
  rightIconSize: number,
  rightIconColor: string,
  titleText: string,
  titleStyle: EStyleSheet
};

const TopNavigator = (props: Props) => (
  <View style={props.containerStyle}>
    <TouchableOpacity hitSlop={hitSlop} onPress={() => props.onLeftIconPress()}>
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
