import React, { useEffect } from 'react';
import { Image } from 'react-native';

import { usePokemon } from '../../hooks';
import { styles } from './homeScreen.styles';
import { PokemonList, PokemonListHeader } from '../../components';

const HomeScreen = () => {
  const { pokemonList, loadPokemons } = usePokemon();

  useEffect(() => {
    loadPokemons();
  }, []);

  return (
    <>
      <Image source={require('../../assets/images/pokebola.png')} style={styles.image} />
      <PokemonList data={pokemonList} showHeader={true} onReachEnd={loadPokemons} headerComponent={<PokemonListHeader title="Pokedex" />} />
    </>
  );
};

export { HomeScreen };
