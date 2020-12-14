import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import adhan from 'adhan'
import * as Location from 'expo-location';
import PrayerTimes from './PrayerTimes';
import Pages from './Pages';
import Quran from './Quran';



const App = () => {

  return (
    <View style={styles.container}>
      <StatusBar />
      <Quran />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 254, 219)',
    marginTop: StatusBar.currentHeight || 0,
  },
  paragraph: {
    fontSize: 16,
    textAlign: 'center',
  }
});

export default App;
