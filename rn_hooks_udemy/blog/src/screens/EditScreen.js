import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';
import { useNavigation } from '@react-navigation/native';
import Form from '../components/Form';

function CreateScreen({ route }) {
  const { postId } = route.params;
  const { state, saveBlogPost } = useContext(Context);
  const navigation = useNavigation();

  const blogPost = state.find((post) => post.id === postId);

  return (
    <View style={styles.container}>
      <Form
        postId={blogPost.id}
        postTitle={blogPost.title}
        postContent={blogPost.content}
        buttonTitle='Save Post'
        onSubmit={(post) => {
          saveBlogPost({ ...post, id: postId });
          navigation.goBack();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CreateScreen;
