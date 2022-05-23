import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './SearchScreen.styles';
import { PokemonList, SearchInput } from '../../components';
import { usePokemonSearch } from '../../hooks/usePokemonSearch/usePokemonSearch';

const SearchScreen = () => {
  const { top } = useSafeAreaInsets();
  const { isFetching, pokemonList } = usePokemonSearch();

  return isFetching ? (
    <View style={styles.loading}>
      <ActivityIndicator size={30} color={'grey'} />
    </View>
  ) : (
    <View style={{ ...styles.container, marginTop: top + 20 }}>
      <SearchInput />
			<PokemonList data={pokemonList}/>
    </View>
  );
};

export { SearchScreen };
