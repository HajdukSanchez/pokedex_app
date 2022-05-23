import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';

import { styles } from './PokemonListHeader.styles';

interface PokemonListHeaderProps {
  title: string;
  style?: StyleProp<TextStyle>;
}

const PokemonListHeader = ({ title, style }: PokemonListHeaderProps) => {
  return <Text style={{ ...styles.text, ...(style as any) }}>{title}</Text>;
};

export { PokemonListHeader };
