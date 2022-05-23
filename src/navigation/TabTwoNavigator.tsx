import React from 'react';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';

import { RootStackParamList } from '../routes/routes';
import { PokemonScreen, SearchScreen } from '../screens';

const { Navigator, Screen } = createStackNavigator<RootStackParamList>();

const TabTwoNavigator = () => {
  return (
    <Navigator screenOptions={_screenOptions} initialRouteName={'Search'}>
      <Screen name={'Search'} component={SearchScreen} />
      <Screen name={'Pokemon'} component={PokemonScreen} />
    </Navigator>
  );
};

const _screenOptions: StackNavigationOptions = {
  headerShown: false,
};

export { TabTwoNavigator };
