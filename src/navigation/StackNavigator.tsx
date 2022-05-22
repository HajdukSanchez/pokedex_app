import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { HomeScreen, PokemonScreen } from '../screens';
import { RootStackParamList } from '../routes/routes';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} initialRouteName={'Home'}>
      <Screen name={'Home'} component={HomeScreen} />
      <Screen name={'Pokemon'} component={PokemonScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { StackNavigator };
