import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';



const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: 'yellow',
    color: '#fff'
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <AppBarTab />
      <Text>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  )
}

export default Main;