import React from 'react';
import { Text, Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './homeScreen';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();

  return (
    <>
      <Image source={require('../../assets/images/pokebola.png')} style={styles.image} />
      <Text style={{ ...styles.text, top: top + 20 }}>Pokedex</Text>
    </>
  );
};

export { HomeScreen };
