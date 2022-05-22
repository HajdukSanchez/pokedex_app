import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { useColor } from '../../hooks';
import { styles } from './PokemonCard.styles';
import { toCapitalize } from '../../util/utils';
import { Pokemon } from '../../models/pokemon.model';
import { useRef } from 'react';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon: { name, id, image } }: PokemonCardProps) => {
  const { backgroundColor, getColorByImage } = useColor('grey');
  const isMounted = useRef(true);

  useEffect(() => {
    if (!isMounted.current) return;
    getColorByImage(image);

    return () => {
      isMounted.current = false;
    };
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
