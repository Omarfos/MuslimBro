import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput, Button } from 'react-native';
import adhan from 'adhan'
import * as Location from 'expo-location';

const PrayerTime = (props) => {
  return (
    <Text style={styles.paragraph}>
      {props.time}
    </Text>
  )
}

const App = () => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const params = adhan.CalculationMethod.MuslimWorldLeague();
  let prayerTimes;
  if (location) {
    prayerTimes = new adhan.PrayerTimes(new adhan.Coordinates(location.coords.latitude, location.coords.longitude), new Date(), params);
  }

  return (

    <View style={styles.container}>
      {prayerTimes &&
        <>
          <PrayerTime time={prayerTimes.fajr.toLocaleTimeString()} />
          <PrayerTime time={prayerTimes.dhuhr.toLocaleTimeString()} />
          <PrayerTime time={prayerTimes.asr.toLocaleTimeString()} />
          <PrayerTime time={prayerTimes.maghrib.toLocaleTimeString()} />
          <PrayerTime time={prayerTimes.isha.toLocaleTimeString()} />
        </>
      }
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default App;
