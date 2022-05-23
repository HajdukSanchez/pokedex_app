import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleProp, ViewStyle, Keyboard } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { useDebounce } from '../../hooks';

import { styles } from './SearchInput.styles';

interface SearchInputProps {
  onDebounce: (value: string) => void;
  debounceTime?: number;
  style?: StyleProp<ViewStyle>;
}

const SearchInput = ({ style, debounceTime = 500, onDebounce }: SearchInputProps) => {
  const [text, setText] = useState<string>('');
  const { debounceValue } = useDebounce(text, debounceTime);

  const handleClear = () => {
    setText('');
    Keyboard.dismiss();
  };

  useEffect(() => {
    onDebounce(debounceValue);
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
        {text.length > 0 ? (
          <Icon.Button name="close-outline" color={'grey'} size={30} onPress={handleClear} style={styles.closeIcon} />
        ) : (
          <Icon name="search-outline" color={'grey'} size={30} />
        )}
      </View>
    </View>
  );
};

export { SearchInput };
