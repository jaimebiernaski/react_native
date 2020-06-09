// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import IndexScreen from './src/screens/IndexScreen';
import EditScreen from './src/screens/EditScreen';
import CreateScreen from './src/screens/CreateScreen';
import ShowScreen from './src/screens/ShowScreen';
import { BlogProvider } from './src/context/BlogContext';

const Stack = createStackNavigator();

function App() {
  return (
    <BlogProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Index'>
          <Stack.Screen
            name='Index'
            component={IndexScreen}
            options={{ title: 'Blogs' }}
          />
          <Stack.Screen name='Edit' component={EditScreen} />
          <Stack.Screen name='Create' component={CreateScreen} />
          <Stack.Screen name='Show' component={ShowScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}

export default App;
