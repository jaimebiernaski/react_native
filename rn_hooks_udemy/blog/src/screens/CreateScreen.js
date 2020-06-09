import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function CreateScreen() {
  return (
    <View style={styles.container}>
      <Text>CreateScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateScreen;
