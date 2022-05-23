import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchScreen.styles';
import { usePokemonSearch } from '../../hooks';
import { Loading, PokemonList, PokemonListHeader, SearchInput } from '../../components';
import { Pokemon } from '../../models/pokemon.model';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemonList } = usePokemonSearch();
  const [searchText, setSearchText] = useState<string>('');
  const [filterPokemon, setFilterPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    if (searchText.length > 1) {
      setFilterPokemon(pokemonList.filter((pokemon: Pokemon) => pokemon.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())));
    } else if (searchText.length === 0) {
      setFilterPokemon([]);
    }
  }, [searchText]);

  return isFetching ? (
    <Loading color="grey" />
  ) : (
    <View style={{ ...styles.container }}>
      <SearchInput style={{ ...styles.search, top: top + 20 }} onDebounce={setSearchText} debounceTime={300} />
      <PokemonList
        data={filterPokemon}
        showHeader
        showLoading={false}
        headerComponent={<PokemonListHeader title={searchText} style={styles.listTitle} />}
      />
    </View>
  );
};

export { SearchScreen };
