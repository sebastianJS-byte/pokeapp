import { POKEMON_TYPE_COLORS, POKEMON_COLORS_TYPE } from "./constants";

export const getColorByPokemonType = (type) => POKEMON_TYPE_COLORS[type.toLowerCase()];
export const getPokemonColor = (type) => POKEMON_COLORS_TYPE[type.toLowerCase()];

