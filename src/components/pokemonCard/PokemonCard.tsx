import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { StackNavigationProp } from '@react-navigation/stack';

import { useColor } from '../../hooks';
import { styles } from './PokemonCard.styles';
import { toCapitalize } from '../../utilities/utils';
import { Pokemon } from '../../models/pokemon.model';
import { RootStackParamList } from '../../routes/routes';
import { useNavigation } from '@react-navigation/native';

interface PokemonCardProps {
  pokemon: Pokemon;
}

const PokemonCard = ({ pokemon: { name, id, image } }: PokemonCardProps) => {
  const { backgroundColor, getColorByImage } = useColor('grey');
  const isMounted = useRef(true);
  const { navigate } = useNavigation<StackNavigationProp<RootStackParamList>>();

  useEffect(() => {
    if (!isMounted.current) return;
    getColorByImage(image);

    return () => {
      isMounted.current = false;
    };
  }, [image]);

  const handleNaviagtion = () => {
    const pokemon: Pokemon = {
      id,
      name,
      image,
    };
    navigate('Pokemon', { pokemon, color: backgroundColor });
  };

  return (
    <TouchableOpacity activeOpacity={0.9} onPress={handleNaviagtion}>
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
