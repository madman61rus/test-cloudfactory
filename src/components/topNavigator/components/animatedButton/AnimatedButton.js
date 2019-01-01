//@flow
import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {BallIndicator} from 'react-native-indicators';
import {TouchableOpacity} from 'react-native';
import type {Props} from './types';

const AnimatedButton = (props: Props) =>
  props.isAnimated ? (
    <View>
      <BallIndicator size={props.iconSize} color={props.iconColor} />
    </View>
  ) : (
    <TouchableOpacity onPress={() => props.onIconPress()}>
      <Icon name={props.iconName} size={props.iconSize} color={props.iconColor} />
    </TouchableOpacity>
  );

export default AnimatedButton;
