import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const navigation = useNavigation();
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useEffect(() => {
    navigation.addListener('focus', () => clearErrorMessage());
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        title='Sign Up'
        buttonTitle='Create account'
        onSubmit={signup}
        errorMessage={state.errorMessage}
      />
      <NavLink
        desc='I already have an account.'
        to='Signin'
        fire={() => clearErrorMessage()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default SigninScreen;
