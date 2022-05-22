import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';

import { styles } from './PokemonDetail.styles';
import { toCapitalize } from '../../utilities/utils';
import { Ability, Move, PokemonInformation, Sprites, Type } from '../../models/pokemon.model';

interface PokemonDetialProps {
  pokemon: PokemonInformation;
  color: string;
}
interface TypesSectionProps {
  types: Type[];
}
interface WeightSectionProps {
  weight: number;
}
interface SpritesSectionProps {
  sprites: Sprites;
}
interface AbilitiesSectionProps {
  abilities: Ability[];
}
interface MovesSectionProps {
  moves: Move[];
  color: string;
}

const PokemonDetail = ({ pokemon, color }: PokemonDetialProps) => {
  return (
    <ScrollView style={styles.scroll}>
      <_TypesSection types={pokemon.types} />
      <_WeightSection weight={pokemon.weight} />
      <_SpritesSection sprites={pokemon.sprites} />
      <_AbilitiesSection abilities={pokemon.abilities} />
      <_MovesSection moves={pokemon.moves} color={color} />
    </ScrollView>
  );
};

const _TypesSection = ({ types }: TypesSectionProps) => {
  return (
    <View style={{ ...styles.sectionContainer, marginTop: 400 }}>
      <Text style={styles.sectionTitle}>Types</Text>
      <View style={styles.typesContainer}>
        {types.map(({ type }, index) => (
          <Text style={styles.sectionText} key={`${index}-${type.name}`}>
            {toCapitalize(type.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const _WeightSection = ({ weight }: WeightSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Weight</Text>
      <Text style={styles.sectionText}>{weight} kg</Text>
    </View>
  );
};

const _SpritesSection = ({ sprites }: SpritesSectionProps) => {
  return (
    <View style={{ ...styles.sectionContainer, marginHorizontal: 0 }}>
      <Text style={{ ...styles.sectionTitle, marginHorizontal: 20 }}>Sprites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Image source={{ uri: sprites.front_default }} style={styles.spriteImage} />
        <Image source={{ uri: sprites.back_default }} style={styles.spriteImage} />
        <Image source={{ uri: sprites.front_shiny }} style={styles.spriteImage} />
        <Image source={{ uri: sprites.back_shiny }} style={styles.spriteImage} />
      </ScrollView>
    </View>
  );
};

const _AbilitiesSection = ({ abilities }: AbilitiesSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Base abilities</Text>
      <View style={styles.typesContainer}>
        {abilities.map(({ ability }, index) => (
          <Text style={styles.sectionText} key={`${index}-${ability.name}`}>
            {toCapitalize(ability.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const _MovesSection = ({ moves, color }: MovesSectionProps) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Moves</Text>
      <View style={{ ...styles.typesContainer, ...styles.movesContainer }}>
        {moves.map(({ move }, index) => (
          <Text style={{ ...styles.sectionText, ...styles.movesText, borderColor: color }} key={`${index}-${move.name}`}>
            {toCapitalize(move.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

export { PokemonDetail };
