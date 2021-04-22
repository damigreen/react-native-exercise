import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';


const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.colors.statusBGColor2,
    backgroundColor: theme.colors.statusBGColor2,
    height: 50,
    // flex: 1,
    padding: theme.appMargin.marginSize,
    justifyContent: 'center',
  },
  tabColor: {
    color: theme.colors.primaryColor,
  }

});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.tabColor}>Repositories</Text>
    </View>
  )
};


export default AppBarTab;
