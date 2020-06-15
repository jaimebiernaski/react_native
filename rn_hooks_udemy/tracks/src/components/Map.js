// import '../_mockLocation';
import React, { useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import MapView, { Polyline, Circle } from 'react-native-maps';

import { Context as LocationContext } from '../context/LocationContext';

const Maps = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size='large' style={styles.loading} />;
  }

  return (
    <View>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        region={{
          ...currentLocation.coords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        mar
      >
        <Circle
          center={currentLocation.coords}
          radius={50}
          strokeColor='rgba(158,158,255,1.0)'
          fillColor='rgba(158,158,255,0.3)'
        />
        <Polyline
          strokeWidth={3}
          strokeColor='red'
          coordinates={locations.map((location) => location.coords)}
        />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
  },
  loading: { marginTop: 200 },
});
export default Maps;
