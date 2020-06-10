import React, { useContext } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { Context } from '../context/BlogContext';
import Item from '../components/Item';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';

function IndexScreen() {
  const { state, deleteBlogPost } = useContext(Context);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          style={styles.buttom}
          onPress={() => navigation.navigate('Create')}
        >
          <MaterialIcons name='add' style={styles.icon} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  console.log('state', state);
  return (
    <View style={styles.container}>
      <FlatList
        data={state}
        keyExtractor={(_, index) => `${index}`}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            id={item.id}
            deleteItem={(id) => deleteBlogPost(id)}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    flex: 1,
  },
  buttom: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 24,
  },
});

export default IndexScreen;
