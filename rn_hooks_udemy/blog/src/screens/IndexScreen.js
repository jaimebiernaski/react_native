import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import Item from '../components/Item';

function IndexScreen() {
  const { state, addBlogPost, deleteBlogPost } = useContext(Context);

  return (
    <View style={styles.container}>
      <Button title='Add Post' onPress={addBlogPost} />
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
    flex: 1,
  },
});

export default IndexScreen;
