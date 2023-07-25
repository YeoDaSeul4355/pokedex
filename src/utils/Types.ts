export interface AppTypeInitialState {
  toasts: string[];
  userInfo: undefined | { email: string };
}

export interface PokemonInitialStateType {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: generatedPokemonType[] | undefined;
  compareQueue: generatedPokemonType[];
  userPokemons: userPokemonsType[];
}

export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonType {
  name: string;
  id: number;
  image: string;
  types: pokemonTypeInterface[];
}

export interface pokemonTypeInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface userPokemonsType extends generatedPokemonType {
  firebaseId?: string;
}

export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";

export interface pokemonStatsType {
  name: string;
  value: string;
}
export type pokemonElementType =
  | "bug"
  | "dark"
  | "dragon"
  | "electric"
  | "fairy"
  | "fighting"
  | "fire"
  | "flying"
  | "ghost"
  | "grass"
  | "ground"
  | "ice"
  | "normal"
  | "poison"
  | "psychic"
  | "rock"
  | "steel"
  | "water";