import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.addListener('focus', () => clearErrorMessage());
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <AuthForm
        title='Tracker'
        buttonTitle='Sign In'
        onSubmit={signin}
        errorMessage={state.errorMessage}
      />
      <NavLink desc='Create Account' to='Signup' />
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
