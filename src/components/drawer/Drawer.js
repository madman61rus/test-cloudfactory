//@flow
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import type {NavigationState} from 'react-navigation/src/TypeDefinition';

const navigateTo = (page: string, navigation: Object) => {
  const state = navigation.state;
  if (state.routes[state.index].routeName === page) {
    navigation.closeDrawer();
  }
  navigation.navigate(page);
};

const Drawer = (props: NavigationState) => {
  const navigation = props.navigation;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.lineContainer}
        onPress={() => navigateTo('About', navigation)}
      >
        <Text style={styles.lineText}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.lineContainer}
        onPress={() => navigateTo('Quotes', navigation)}
      >
        <Text style={styles.lineText}>Quotes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Drawer;
