import React from 'react';
import { View, Text } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes/routes';
import { styles } from './PokemonScreen.styles';

interface PokemonScreenProps extends StackScreenProps<RootStackParamList, 'Pokemon'> {}

const PokemonScreen = ({
  route: {
    params: { pokemon, color },
  },
}: PokemonScreenProps) => {
  return (
    <View>
      <Text style={styles.text}>{pokemon.name}</Text>
    </View>
  );
};

export { PokemonScreen };
