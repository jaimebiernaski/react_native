import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TrackListScreen from '../screens/TrackListScreen';
import TrackDetailScreen from '../screens/TrackDetailScreen';
import TrackCreateScreen from '../screens/TrackCreateScreen';
import AccountScreen from '../screens/AccountScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
      initialRouteName='Track'
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

export default PrivateNav;
