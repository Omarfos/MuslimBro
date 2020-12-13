import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button, SafeAreaView, FlatList } from 'react-native';
import adhan from 'adhan'
import * as Location from 'expo-location';
import PrayerTimes from './PrayerTimes';
import Pages from './Quran';


const DATA = Array.from({ length: 604 },
  (v, i) => {
    let obj = {};
    obj.id = (i + 1).toString();
    obj.source = Pages[(i + 1).toString()];
    return obj;
  });

console.log('data', DATA)

const Item = ({ source }) => (
  <Image
    source={source}
    style={styles.page}
  />
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item source={item.source} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: StatusBar.currentHeight || 0,
  },
  paragraph: {
    fontSize: 100,
    textAlign: 'center',
  },
  page: {
    width: '100%',
    height: undefined,
    aspectRatio: 0.737,
  },
  node: {
    width: '100%',
  },
});

export default App;
