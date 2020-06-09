import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function ShowScreen() {
  return (
    <View style={styles.container}>
      <Text>ShowScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ShowScreen;
