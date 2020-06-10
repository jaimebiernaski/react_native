import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const Form = ({
  postTitle = '',
  postContent = '',
  buttonTitle = 'Button',
  onSubmit = () => {},
}) => {
  const [title, setTitle] = useState(postTitle);
  const [content, setContent] = useState(postContent);

  return (
    <View style={styles.container}>
      <Text style={styles.textInputTitle}>Enter Title</Text>
      <TextInput
        placeholder='Enter Title'
        style={styles.input}
        onChangeText={(typedTitle) => setTitle(typedTitle)}
        value={title}
      />
      <Text style={styles.textInputTitle}>Enter Content</Text>
      <TextInput
        placeholder='Enter Content'
        style={styles.input}
        onChangeText={(typedContent) => setContent(typedContent)}
        value={content}
        multiline
      />
      <Button
        title={buttonTitle}
        onPress={() => onSubmit({ title, content })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  textInputTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    marginBottom: 10,
    marginTop: 5,
    fontSize: 16,
  },
});

export default Form;
