import React, { useEffect } from 'react';
import { Text, Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './homeScreen';
import { usePokemon } from '../../hooks/usePokemon/usePokemon';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  usePokemon();

  return (
    <>
      <Image source={require('../../assets/images/pokebola.png')} style={styles.image} />
      <Text style={{ ...styles.text, top: top + 20 }}>Pokedex</Text>
    </>
  );
};

export { HomeScreen };
