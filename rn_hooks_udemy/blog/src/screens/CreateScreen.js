import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import { useNavigation } from '@react-navigation/native';
import Form from '../components/Form';

const CreateScreen = () => {
  const { addBlogPost } = useContext(Context);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Form
        buttonTitle='Add Post'
        onSubmit={(post) => {
          addBlogPost(post);
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default CreateScreen;
