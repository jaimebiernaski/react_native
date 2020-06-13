import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView>
      <Button title='Sign Out' onPress={signout} style={styles.button} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: { width: 200, alignSelf: 'center', marginVertical: 15 },
});
export default AccountScreen;
