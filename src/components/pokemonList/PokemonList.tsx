import React, { ReactElement } from 'react';
import { FlatList } from 'react-native';

import { Loading } from '../loading/Loading';
import { styles } from './PokemonList.styles';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonCard } from '../pokemonCard/PokemonCard';

interface PokemonListProps {
  data: Pokemon[];
  showHeader?: boolean;
  showLoading?: boolean;
  headerComponent?: ReactElement;
  onReachEnd?: () => void;
}

const PokemonList = ({ data, showHeader, headerComponent, showLoading, onReachEnd }: PokemonListProps) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      numColumns={2}
      columnWrapperStyle={styles.list}
      keyExtractor={(pokemon: Pokemon) => `${pokemon.id}-${pokemon.name}`}
      renderItem={({ item: pokemon }) => <PokemonCard pokemon={pokemon} />}
      onEndReached={onReachEnd}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={showHeader && headerComponent ? headerComponent : null}
      ListFooterComponent={showLoading ? <Loading /> : null}
    />
  );
};

export { PokemonList };
