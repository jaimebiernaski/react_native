import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';
import { Context as LocationContext } from '../context/LocationContext';
import useSaveTrack from '../hooks/useSaveTrack';
import { useNavigation } from '@react-navigation/native';

const TrackForm = () => {
  const {
    state: { trackName, recording, locations },
    startRecording,
    stopRecording,
    addTrackName,
    reset,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Input
        label='Track Name'
        placeholder='Enter track name'
        onChangeText={addTrackName}
        value={trackName}
      />
      <Button
        buttonStyle={recording ? styles.buttonRed : styles.button}
        title={recording ? 'Stop Recording' : 'Start Recording'}
        onPress={recording ? stopRecording : startRecording}
      />

      {!recording && locations.length ? (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            buttonStyle={[styles.buttonRed, { width: 150 }]}
            title='Discart Track'
            onPress={() => reset()}
          />
          <Button
            buttonStyle={styles.buttonSmall}
            title='Save Track'
            onPress={() => {
              saveTrack();
              navigation.navigate('Track');
            }}
          />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  button: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 15,
  },
  buttonSmall: {
    width: 150,
    alignSelf: 'center',
    marginVertical: 15,
  },
  buttonRed: {
    width: 200,
    alignSelf: 'center',
    marginVertical: 15,
    backgroundColor: 'red',
  },
});

export default TrackForm;
