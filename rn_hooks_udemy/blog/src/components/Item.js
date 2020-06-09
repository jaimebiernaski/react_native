import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Item = ({ title, id, deleteItem }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>

      <TouchableOpacity style={styles.touch} onPress={() => deleteItem(id)}>
        <AntDesign name='delete' style={styles.icon} />
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
  text: {
    flex: 1,
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
