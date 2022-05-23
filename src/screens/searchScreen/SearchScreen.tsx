import React from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchScreen.styles';
import { usePokemonSearch } from '../../hooks/usePokemonSearch/usePokemonSearch';
import { Loading, PokemonList, PokemonListHeader, SearchInput } from '../../components';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemonList } = usePokemonSearch();

  return isFetching ? (
    <Loading color="grey" />
  ) : (
    <View style={{ ...styles.container }}>
      <SearchInput style={{ ...styles.search, top: top + 20 }} />
      <PokemonList data={pokemonList} headerComponent={<PokemonListHeader title="Hasas" style={styles.listTitle} />} showHeader />
    </View>
  );
};

export { SearchScreen };
