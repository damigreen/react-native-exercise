import React from 'react'
import { StyleSheet, View, Text, } from 'react-native'
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import AppBarTab from './AppBarTab';
import theme from '../theme';
import { Switch, Route, Redirect } from 'react-router-native';
import SignIn from './SignIn';


const styles = StyleSheet.create({
  container: {
    // marginTop: Constants.statusBarHeight,
    flex: 1,
    flexGrow: 1,
    backgroundColor: theme.colors.primaryColor,
    // backgroundColor: 'red'
  },
});


const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <AppBarTab />
      <Text style={{textAlign: 'center'}}>Repository Rating App</Text>

      <Switch>
        <Route path="/repositories" exact>
          <RepositoryList />
        </Route>

        <Route path="/signin">
          <SignIn />
        </Route>

        <Redirect to="/" />
      </Switch>
    </View>
  )
}

export default Main;
