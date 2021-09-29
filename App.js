
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RouteStack from './src/routes';
import { Provider } from 'react-redux';
import store from './src/redux/store';

export default function App() {
  return (
    <SafeAreaProvider
      initialMetrics={{
        frame: { x: 0, y: 0, width: 0, height: 0 },
        insets: { top: 0, left: 0, right: 0, bottom: 0 },
      }}>
      <NavigationContainer>
        <Provider store={store}>
          <RouteStack />
        </Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}