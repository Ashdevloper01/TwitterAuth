/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {HomeNavigator} from './src/navigation/homeNavigator';
import {COLOR_WHITE} from './src/utils/colors';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <HomeNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR_WHITE,
  },
});

export default App;
