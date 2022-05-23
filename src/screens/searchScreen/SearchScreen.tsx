import React from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchScreen.styles';
import { SearchInput } from '../../components';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, marginTop: top + 20 }}>
      <SearchInput />
    </View>
  );
};

export { SearchScreen };
