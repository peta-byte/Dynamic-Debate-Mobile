/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import Home from './src/Home';
import Header from './src/Header';
import Debate from './src/Debate';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <StatusBar hidden={true} />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{
            headerTitle: () => <Header />,
            headerStyle: {backgroundColor: '#3f51b5'},
            headerTitleContainerStyle: {width: '100%'},
          }} />
          <Stack.Screen name="Debate" component={Debate} options={{
            headerTitle: '',
            headerTintColor: '#fff',
            headerStyle: {backgroundColor: '#3f51b5'},
          }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
  },
});

export default App;
