import React from 'react';
import { Text } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './PokemonListHeader.styles';

interface PokemonListHeaderProps {
  title: string;
}

const PokemonListHeader = ({ title }: PokemonListHeaderProps) => {
  const { top } = useSafeAreaInsets();

  return <Text style={{ ...styles.text, top: top + 20, marginBottom: top + 40 }}>{title}</Text>;
};

export { PokemonListHeader };
