import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';

import { styles } from './PokemonDetail.styles';
import { toCapitalize } from '../../utilities/utils';
import { Ability, Move, PokemonInformation, Sprites, Type, Stat } from '../../models/pokemon.model';

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
interface StatsSectionProps {
  stats: Stat[];
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
      <_StatsSection stats={pokemon.stats} color={color} />
    </ScrollView>
  );
};

const _TypesSection = ({ types }: TypesSectionProps) => {
  return (
    <View style={{ ...styles.sectionContainer, marginTop: 400 }}>
      <Text style={styles.sectionTitle}>Types</Text>
      <View style={styles.sectionsContainer}>
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
      <View style={styles.sectionsContainer}>
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
      <View style={{ ...styles.sectionsContainer, ...styles.movesContainer }}>
        {moves.map(({ move }, index) => (
          <Text style={{ ...styles.sectionText, ...styles.movesText, borderColor: color }} key={`${index}-${move.name}`}>
            {toCapitalize(move.name)}
          </Text>
        ))}
      </View>
    </View>
  );
};

const _StatsSection = ({ stats, color }: StatsSectionProps) => {
  return (
    <View style={{ ...styles.sectionContainer, marginBottom: 80 }}>
      <Text style={styles.sectionTitle}>Stats</Text>
      <View style={styles.statsContainer}>
        {stats.map(({ stat, base_stat }, index) => (
          <View key={`${index}-${stat.name}`} style={styles.statItem}>
            <Text style={{ ...styles.sectionText, ...styles.statText }}>{toCapitalize(stat.name)}</Text>
            <View style={styles.statBaseContainer}>
              <Text style={{ ...styles.sectionText, ...styles.statBaseText, width: `${base_stat}%`, backgroundColor: color }}>{base_stat} %</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export { PokemonDetail };
