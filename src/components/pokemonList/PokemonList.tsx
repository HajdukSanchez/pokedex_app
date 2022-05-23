import React, { ReactElement } from 'react';
import { FlatList, ActivityIndicator, View } from 'react-native';

import { styles } from './PokemonList.styles';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonCard } from '../pokemonCard/PokemonCard';

interface PokemonListProps {
  data: Pokemon[];
  showHeader?: boolean;
  headerComponent?: ReactElement;
  onReachEnd?: () => void;
}

const PokemonList = ({ data, showHeader, headerComponent, onReachEnd }: PokemonListProps) => {
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
      ListHeaderComponent={showHeader && headerComponent ? headerComponent : <View></View>}
      ListFooterComponent={<_FooterComponent />}
    />
  );
};

const _FooterComponent = () => {
  return (
    <View style={styles.loadingContainer}>
      <ActivityIndicator style={styles.loading} />
    </View>
  );
};

export { PokemonList };
