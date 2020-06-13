import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import SigninScreen from '../screens/SigninScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createStackNavigator();

const PublicNav = () => {
  return (
    <Stack.Navigator initialRouteName='Signin'>
      <Stack.Screen
        name='Signin'
        component={SigninScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Signup'
        component={SignupScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default PublicNav;
