//@flow
import React from 'react';
import {SafeAreaView, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import EStyleSheet from 'react-native-extended-stylesheet';
import {styles} from './styles';
import type {Props} from 'types';

const GradientWrapper = (props: Props) => (
  <View style={styles.container}>
    <SafeAreaView style={{flex: 1}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={[
          EStyleSheet.value('$backgroundColorSide'),
          EStyleSheet.value('$backgroundColorCenter'),
          EStyleSheet.value('$backgroundColorSide')
        ]}
        locations={[0, 0.5, 1]}
        style={{flex: 1}}
      >
        {props.children}
      </LinearGradient>
    </SafeAreaView>
  </View>
);

export default GradientWrapper;
