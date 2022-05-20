import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigation/StackNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <StackNavigator />
    </NavigationContainer>
  );
};

export { App };
