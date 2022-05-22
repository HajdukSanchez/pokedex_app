import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { TabNavigator } from './src/navigation/TabNavigator';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <TabNavigator />
    </NavigationContainer>
  );
};

export { App };
