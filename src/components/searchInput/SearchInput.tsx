import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleProp, ViewStyle } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounce } from '../../hooks';

import { styles } from './SearchInput.styles';

interface SearchInputProps {
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style }: SearchInputProps) => {
  const [text, setText] = useState<string>('');
  const { debounceValue } = useDebounce(text, 500);

  useEffect(() => {
    console.log('debounceValue', debounceValue); // After 500ms we can get the debounced value
  }, [debounceValue]);

  return (
    <View style={{ ...styles.container, ...(style as any) }}>
      <View style={styles.background}>
        <TextInput
          placeholder="Search Pokemon"
          style={styles.textInput}
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor={'grey'}
          value={text}
          onChangeText={setText}
        />
        <Icon name="search-outline" color={'grey'} size={30} />
      </View>
    </View>
  );
};

export { SearchInput };
