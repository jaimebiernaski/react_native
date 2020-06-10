import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Item = ({ title, id, deleteItem }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.textContainer}
        onPress={() => {
          navigation.navigate('Show', {
            postId: id,
          });
        }}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touch} onPress={() => deleteItem(id)}>
        <MaterialIcons name='delete' style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    flexDirection: 'row',
    height: 45,
    alignItems: 'center',
    backgroundColor: '#EAFAF1',
    borderWidth: 1,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    fontSize: 24,
  },
  touch: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default Item;
