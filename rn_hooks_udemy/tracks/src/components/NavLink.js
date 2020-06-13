import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const NavLink = ({ desc, to, fire = () => {} }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        navigation.navigate(to);
        fire();
      }}
    >
      <Text style={styles.text}>{desc}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,

    alignSelf: 'center',
  },
  text: { fontSize: 16, color: 'rgb(29, 115, 212)' },
});

export default NavLink;
