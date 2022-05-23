import React, { useEffect } from 'react';
import { Image } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { usePokemon } from '../../hooks';
import { styles } from './homeScreen.styles';
import { PokemonList, PokemonListHeader } from '../../components';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { pokemonList, loadPokemons } = usePokemon();

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <Image source={require('../../assets/images/pokebola.png')} style={styles.image} />
      <PokemonList
        data={pokemonList}
        showHeader
        onReachEnd={loadPokemons}
        headerComponent={<PokemonListHeader title="Pokedex" style={{ top: top + 20, marginBottom: top + 40 }} />}
      />
    </>
  );
};

export { HomeScreen };
