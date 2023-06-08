import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyHeader from './components/MyHeader';
import MyBody from './components/MyBody';
import MyNavBar from './components/MyNavBar';

export default function App() {
  return (
    <View style={styles.container}>
      
      <MyHeader></MyHeader>
      <MyBody></MyBody>
      <MyNavBar></MyNavBar>
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
