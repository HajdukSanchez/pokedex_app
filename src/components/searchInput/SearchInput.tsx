import React from 'react';
import { View, TextInput, StyleProp, ViewStyle } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from './SearchInput.styles';

interface SearchInputProps {
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style }: SearchInputProps) => {
  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.background}>
        <TextInput placeholder="Search Pokemon" style={styles.textInput} autoCapitalize="none" autoCorrect={false} placeholderTextColor={'grey'} />
        <Icon name="search-outline" color={'grey'} size={30} />
      </View>
    </View>
  );
};

export { SearchInput };
