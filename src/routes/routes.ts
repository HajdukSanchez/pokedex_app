import { Pokemon } from '../models/pokemon.model';

interface PokemonScreen {
  pokemon: Pokemon;
  color: string;
}

export type RootStackParamList = {
  Home: undefined;
  Search: undefined;
  Pokemon: PokemonScreen;
};

export type RootTabParamList = {
  TabOne: undefined;
	TabTwo: undefined;
};
