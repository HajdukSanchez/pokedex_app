import React from 'react';
import { Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { SearchScreen } from '../screens';
import { StackNavigator } from './StackNavigator';
import { RootTabParamList } from '../routes/routes';

const { Navigator, Screen } = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <Navigator initialRouteName="Stack" screenOptions={_screenOptions} sceneContainerStyle={{ backgroundColor: 'white' }}>
      <Screen name="Stack" component={StackNavigator} options={{ tabBarIcon: ({ color }) => <_TabBarIcon color={color} name={'list-outline'} /> }} />
      <Screen name="Search" component={SearchScreen} options={{ tabBarIcon: ({ color }) => <_TabBarIcon color={color} name={'search-outline'} /> }} />
    </Navigator>
  );
};

const _screenOptions: BottomTabNavigationOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarActiveTintColor: '#5856D6',
  tabBarLabelStyle: {
    marginBottom: Platform.OS === 'android' ? 10 : 0,
  },
  tabBarStyle: {
		position: 'absolute',
    borderWidth: 0,
    elevation: 0,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
};

interface TabBarIconProps {
  name: string;
  color: string;
}

const _TabBarIcon = ({ color, name }: TabBarIconProps) => <Icon name={name} color={color} size={25} />;

export { TabNavigator };
