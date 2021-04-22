import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.statusBGColor,
  },

});

const AppBar = () => {
  return <View style={styles.container}>{/* Yes---------------------- */}</View>;
};


export default AppBar;
