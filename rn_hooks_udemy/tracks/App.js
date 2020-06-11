import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SigninScreen from './src/screens/SigninScreen';
import SignupScreen from './src/screens/SignupScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const PublicNav = () => {
  return (
    <Stack.Navigator initialRouteName='SigninScreen'>
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

const TrackListAndDetailStack = () => {
  return (
    <Stack.Navigator initialRouteName='TrackList'>
      <Stack.Screen
        name='TrackList'
        component={TrackListScreen}
        options={{ title: 'Track List' }}
      />
      <Stack.Screen
        name='TrackDetail'
        component={TrackDetailScreen}
        options={{ title: 'Track Detail' }}
      />
    </Stack.Navigator>
  );
};

const CreateStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='CreateStack'
        component={TrackCreateScreen}
        options={{ title: 'Create' }}
      />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='AccountStack'
        component={AccountScreen}
        options={{ title: 'Account' }}
      />
    </Stack.Navigator>
  );
};

const PrivateNav = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Track') iconName = 'map';
          if (route.name === 'Create') iconName = 'map-marker-plus';
          if (route.name === 'Account') iconName = 'account-circle';

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Track' component={TrackListAndDetailStack} />
      <Tab.Screen name='Create' component={CreateStack} />
      <Tab.Screen name='Account' component={AccountStack} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [token, setToken] = useState(null);
  return (
    <NavigationContainer>
      {token === null ? <PublicNav /> : <PrivateNav />}
    </NavigationContainer>
  );
};

export default App;
