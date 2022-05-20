import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { HomeScreen } from '../screens';
import { ScreenNames } from '../routes/routes';

const { Navigator, Screen } = createStackNavigator();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions}>
      <Screen name={ScreenNames.Home} component={HomeScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
