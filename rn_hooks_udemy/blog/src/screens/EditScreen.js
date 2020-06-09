import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function EditScreen() {
  return (
    <View style={styles.container}>
      <Text>EditScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EditScreen;
