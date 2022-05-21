import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from './PokemonCard.styles';
import { Pokemon } from '../../models/pokemon.model';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon: { name, id, image } }: PokemonCardProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={styles.card}>
        <View>
          <Text style={styles.cardTtext}>
            {name}
            {'\n#' + id}
          </Text>
        </View>
        <Image source={require('../../assets/images/pokebola-blanca.png')} style={styles.cardBackground} />
        <Image source={{ uri: image }} style={styles.cardImage} />
      </View>
    </TouchableOpacity>
  );
};

export { PokemonCard };
