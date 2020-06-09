import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { BlogContext } from '../context/BlogContext';

function IndexScreen() {
  const { data, addBlogPost } = useContext(BlogContext);

  return (
    <View style={styles.container}>
      <Text>IndexScreend</Text>
      <Button title='Add Post' onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(blogPosts, index) => `${index}`}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default IndexScreen;
