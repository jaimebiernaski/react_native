import React, { useContext } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { Context as TrackContext } from '../context/TrackContext';

const TrackListScreen = () => {
  const navigation = useNavigation();
  const { state, fetchTrack } = useContext(TrackContext);

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => <Button title='Edit' onPress={() => {}} />,
    });
    navigation.addListener('focus', () => fetchTrack());
  }, [navigation]);

  return (
    <SafeAreaView>
      <FlatList
        style={styles.flatList}
        data={state}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <TouchableOpacity>
            <ListItem
              chevron={true}
              title={item.name}
              bottomDivider
              onPress={() => {
                navigation.navigate('TrackDetail', { id: item._id });
              }}
            />
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  flatList: {
    marginTop: 10,
  },
});
export default TrackListScreen;
