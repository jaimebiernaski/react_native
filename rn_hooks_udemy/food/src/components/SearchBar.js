import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SeachBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.container}>
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        autoCorrect={false}
        style={styles.textInput}
        placeholder='Search'
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: 'silver',
    backgroundColor: '#F0EEEE',
    borderRadius: 5,
  },
  textInput: {
    fontSize: 16,
    marginHorizontal: 7,
    flex: 1,
  },
  icon: {
    fontSize: 24,
    color: 'black',
  },
});

export default SeachBar;
