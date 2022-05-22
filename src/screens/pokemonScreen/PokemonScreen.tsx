import React from 'react';
import { View, Text, TouchableOpacity, Image, useWindowDimensions } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import { StackScreenProps } from '@react-navigation/stack';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { styles } from './PokemonScreen.styles';
import { toCapitalize } from '../../utilities/utils';
import { RootStackParamList } from '../../routes/routes';

interface PokemonScreenProps extends StackScreenProps<RootStackParamList, 'Pokemon'> {}

const PokemonScreen = ({
  route: {
    params: { pokemon, color },
  },
  navigation: { navigate },
}: PokemonScreenProps) => {
  const { top } = useSafeAreaInsets();
  const { width } = useWindowDimensions();

  const handleBackButton = () => {
    navigate('Home');
  };

  return (
    <View>
      <View style={{ ...styles.container, backgroundColor: color }}>
        <TouchableOpacity activeOpacity={0.8} style={{ ...styles.backButton, top: top + 10 }} onPress={handleBackButton}>
          <Icon name="arrow-back-outline" size={30} color={'white'} />
        </TouchableOpacity>
        <Text style={{ ...styles.text, top: top + 50 }}>
          {toCapitalize(pokemon.name)} {'\n#' + pokemon.id}
        </Text>
        <Image source={require('../../assets/images/pokebola-blanca.png')} style={styles.background} />
        <Image source={{ uri: pokemon.image }} style={{ ...styles.image, width: width * 0.75, height: width * 0.75 }} />
      </View>
    </View>
  );
};

export { PokemonScreen };
