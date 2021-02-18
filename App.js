/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import initRedux from './src/redux/initRedux';
import {SafeAreaView, StyleSheet, StatusBar, View} from 'react-native';
import HomeScreen from './src/screen/home/HomeScreen';

const App = () => {
  const storeDetails = initRedux();
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView />
      <Provider store={storeDetails.store}>
        <View style={styles.mainStyle}>
          <HomeScreen />
        </View>
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  mainStyle: {margin: 10, alignItems: 'stretch', flex: 1},
});

export default App;
