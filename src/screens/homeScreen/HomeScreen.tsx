import React from 'react';
import { Text, Image, FlatList, ActivityIndicator } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './homeScreen.styles';
import { PokemonCard } from '../../components';
import { Pokemon } from '../../models/pokemon.model';
import { usePokemon } from '../../hooks/usePokemon/usePokemon';

const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isLoading, pokemonList, loadPokemon } = usePokemon();

  return (
    <>
      <Image source={require('../../assets/images/pokebola.png')} style={styles.image} />
      <FlatList
        data={pokemonList}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={styles.list}
        keyExtractor={(pokemon: Pokemon) => `${pokemon.id}-${pokemon.name}`}
        renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
        onEndReached={() => loadPokemon}
        onEndReachedThreshold={0.5}
        ListHeaderComponent={<Text style={{ ...styles.text, top: top + 20, marginBottom: top + 40 }}>Pokedex</Text>}
        ListFooterComponent={<ActivityIndicator style={{ height: 100, width: 100 }} />}
      />
    </>
  );
};

export { HomeScreen };
