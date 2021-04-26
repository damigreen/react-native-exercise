import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import theme from '../theme';
import { Link } from 'react-router-native';



const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: theme.colors.statusBGColor2,
    backgroundColor: theme.colors.statusBGColor2,
    flexDirection: 'row',
    height: 42,
    // padding: theme.appMargin.marginSize,
    justifyContent: 'center',
  },
  tabColor: {
    color: theme.colors.primaryColor,
  },
  repoStyle: {
    backgroundColor: '#893479',
    marginRight: 8,
    borderRadius:4,
    justifyContent: 'center',
    padding: 4,
  },
  signInStyle: {
    backgroundColor: '#938474',
    borderRadius:4,
    justifyContent: 'center',
    padding: 4,
  }
});

const AppBarTab = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <Link to="/repositories" style={styles.repoStyle} >
          <Text style={styles.tabColor}>Repositories</Text>
        </Link>
        <Link to="/signin" style={styles.signInStyle}>
          <Text style={styles.tabColor}>SignIn</Text>
        </Link>
      </ScrollView>
    </View>
  )
};


export default AppBarTab;
