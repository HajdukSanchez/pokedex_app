import React from 'react';
import { View, TextInput } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './SearchInput.styles';

const SearchInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <TextInput placeholder="Search Pokemon" style={styles.textInput} autoCapitalize="none" autoCorrect={false} placeholderTextColor={'grey'} />
        <Icon name="search-outline" color={'grey'} size={30} />
      </View>
    </View>
  );
};

export { SearchInput };
