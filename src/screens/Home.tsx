import * as React from 'react';
import { useState } from 'react';
import Card from '../components/Card';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLottoDraw } from '../hooks/useLottoDraw';
import RNLocation from 'react-native-location';
import { useGetWeather } from '../hooks/useGetWeather';

const Home: React.FC = () => {
  const [long, setLong] = useState<number>(0);
  const [lat, setLat] = useState<number>(0);
  const weatherData = useGetWeather(long, lat);
  console.log(weatherData);
  RNLocation.requestPermission({
    ios: 'whenInUse',
    android: {
      detail: 'coarse',
    },
  }).then((granted) => {
    if (granted) {
      RNLocation.subscribeToLocationUpdates((locations) => {
        console.log(locations);
        setLong(locations[0].longitude);
        setLat(locations[0].latitude);
      });
    }
  });
  const { data } = useLottoDraw();
  return (
    <View>
      <View style={styles.topBarContainer}>
        <Text style={styles.titleText}>{weatherData.data?.data.name}</Text>
        <Text
          style={styles.tempText}
        >{`${weatherData.data?.data.main.temp}°C ${weatherData.data?.data.weather[0].description}`}</Text>
      </View>
      <FlatList
        data={data?.data.Draws || []}
        keyExtractor={(item) => String(item.DrawNumber)}
        renderItem={({ item }) => <Card item={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topBarContainer: {
    position: 'absolute',
    width: '100%',
    zIndex: 100,
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  productLogo: {
    height: 75,
    width: 75,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
  },
  tempText: {
    marginBottom: 2,
    fontSize: 14,
    fontWeight: '600',
  },
});

export default Home;
