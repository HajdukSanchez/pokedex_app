import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useColor } from '../../hooks';
import { styles } from './PokemonCard.styles';
import { toCapitalize } from '../../util/utils';
import { Pokemon } from '../../models/pokemon.model';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon: { name, id, image } }: PokemonCardProps) => {
  const { backgroundColor, getColorByImage } = useColor('grey');

  useEffect(() => {
    getColorByImage(image);
  }, [image]);

  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View style={{ ...styles.card, backgroundColor }}>
        <View>
          <Text style={styles.cardTtext}>
            {toCapitalize(name)}
            {'\n#' + id}
          </Text>
        </View>
        <View style={styles.cardBackgroundContainer}>
          <Image source={require('../../assets/images/pokebola-blanca.png')} style={styles.cardBackground} />
        </View>
        <Image source={{ uri: image }} style={styles.cardImage} />
      </View>
    </TouchableOpacity>
  );
};

export { PokemonCard };
