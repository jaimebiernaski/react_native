import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ title, buttonTitle, onSubmit, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.textContainer}>
        <Text h2 style={styles.title}>
          {title}
        </Text>
      </View>
      <View style={styles.contentContainer}>
        <Input
          label='E-mail'
          placeholder='E-mail'
          value={email}
          onChangeText={setEmail}
          autoCapitalize='none'
          autoCorrect={false}
        />
        <Input
          label='Password'
          placeholder='Password'
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          autoCapitalize='none'
          autoCorrect={false}
        />
        {errorMessage ? (
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        ) : null}
        <Button
          title={buttonTitle}
          onPress={() => onSubmit({ email, password })}
          buttonStyle={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginTop: 15,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    margin: 10,
  },
  title: {
    marginTop: 15,
  },
  contentContainer: {
    flex: 2,
  },
  errorMessage: {
    alignSelf: 'center',
    color: 'red',
  },
  button: { width: 200, alignSelf: 'center', marginVertical: 15 },
});

export default AuthForm;
