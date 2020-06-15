import React from 'react';
import { StatusBar } from 'react-native';
import { Provider as AuthProvider } from './src/context/AuthContext';
import { Provider as LocationProvider } from './src/context/LocationContext';
import { Provider as TrackProvider } from './src/context/TrackContext';
import AppNavigation from './src/navigation/AppNavigation';

const App = () => {
  return (
    <TrackProvider>
      <LocationProvider>
        <AuthProvider>
          <StatusBar backgroundColor='blue' barStyle='dark-content' />
          <AppNavigation />
        </AuthProvider>
      </LocationProvider>
    </TrackProvider>
  );
};

export default App;
