import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { styles } from './PokemonDetail.styles';
import { toCapitalize } from '../../utilities/utils';
import { PokemonInformation, Type } from '../../models/pokemon.model';

interface PokemonDetialProps {
  pokemon: PokemonInformation;
}
interface TypesSectionProps {
  types: Type[];
}

const PokemonDetail = ({ pokemon }: PokemonDetialProps) => {
  return (
    <ScrollView style={styles.scroll}>
      <_TypesSection types={pokemon.types} />
      <_SpritesSection />
    </ScrollView>
  );
};

const _TypesSection = ({ types }: TypesSectionProps) => {
  return (
    <View style={{ ...styles.sectionContainer, marginTop: 400 }}>
      <Text style={styles.sectionTitle}>Types</Text>
      <View style={styles.typesContainer}>
        {types.map(({ type }, index) => (
          <Text style={styles.typeText} key={`${index}-${type.name}`}>
            {toCapitalize(type.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const _SpritesSection = () => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Sprites</Text>
    </View>
  );
};

export { PokemonDetail };
