import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {GradientWrapper, TopNavigator} from '../../components';
import {styles} from './styles';

class AboutScreen extends Component {
  render() {
    return (
      <GradientWrapper>
        <TopNavigator
          titleText={'About'}
          onLeftIconPress={() => this.props.navigation.openDrawer()}
          onRightIconPress={() => this.props.navigation.openDrawer()}
          rightIconName={''}
        />
        <View style={styles.container}>
        <Text style={styles.text}>{'This is the test application for cloudFactory'}</Text>
        </View>
      </GradientWrapper>
    );
  }
}

export default AboutScreen;
