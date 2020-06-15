import React, { useContext } from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ route }) => {
  const { id } = route.params;
  const { state } = useContext(TrackContext);

  const track = state.find((track) => track._id === id);
  const initialCoords = track.locations[0].coords;

  return (
    <SafeAreaView>
      <Text h2>{track.name}</Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          strokeWidth={3}
          strokeColor='red'
          coordinates={track.locations.map((location) => location.coords)}
        />
      </MapView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    height: 300,
    marginTop: 20,
  },
});
export default TrackDetailScreen;
