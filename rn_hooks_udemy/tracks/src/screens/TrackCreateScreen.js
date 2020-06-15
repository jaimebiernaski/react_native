import React, { useContext, useCallback } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useIsFocused } from '@react-navigation/native';

import { Context as LocationContext } from '../context/LocationContext';
import Maps from '../components/Map';
import useLocation from '../hooks/useLocation';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const {
    state: { recording },
    addLocation,
  } = useContext(LocationContext);

  const callback = useCallback(
    (location) => {
      addLocation(location, recording);
    },
    [recording]
  );

  const isFocused = useIsFocused();

  const [err] = useLocation(isFocused || recording, callback);

  return (
    <SafeAreaView>
      <Text h3 style={styles.title}>
        Create a Track
      </Text>
      <Maps />
      {err ? <Text style={styles.error}>{err}</Text> : null}
      <TrackForm />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    marginVertical: 10,
  },
  error: {
    fontSize: 15,
    color: 'red',
    alignSelf: 'center',
    margin: 10,
  },
});
export default TrackCreateScreen;
