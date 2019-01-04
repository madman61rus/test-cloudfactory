//@flow
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';

const Alert = props => (
  <View style={[styles.container, props.styleContainer]}>
    <Text>{props.text}</Text>
  </View>
);

export default Alert;
