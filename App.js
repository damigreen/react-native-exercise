import React from 'react';
import { ApolloProvider } from '@apollo/client';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import createApolloClient from './src/utils/apolloClient';
// import { StyleSheet, Text, View } from 'react-native';
// import { StatusBar } from 'expo-status-bar';


const apolloClient = createApolloClient();

export default function App() {
  return (
    <NativeRouter>
      <ApolloProvider client={apolloClient}>
        <Main />
      </ApolloProvider>
    </NativeRouter>
  );
}
