import { Pokemon } from '../models/pokemon.model';

interface PokemonScreen {
  pokemon: Pokemon;
  color: string;
}

export type RootStackParamList = {
  Home: undefined;
  Pokemon: PokemonScreen;
};
