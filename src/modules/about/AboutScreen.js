import React, {Component} from 'react';
import {GradientWrapper, TopNavigator} from '../../components';

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
      </GradientWrapper>
    );
  }
}

export default AboutScreen;
