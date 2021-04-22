import React from 'react'
import { StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';
import theme from '../theme';



const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.primaryColor,
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <AppBarTab />
      <RepositoryList />
    </View>
  )
}

export default Main;