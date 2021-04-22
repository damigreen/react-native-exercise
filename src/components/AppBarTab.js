import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: 'green',
  },
  tabColor: {
    // color: theme.colors.primaryColor,
    color: 'red',
    backgroundColor: theme.colors.secondaryColor,
  }

});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabColor}>Home</Text>
    </View>
  )
};


export default AppBarTab;
