import { pokeApi } from "../api/pokeApi/index.js";
import { createContext, useContext } from "react";

const PokemonContext = createContext();

export const  usePokedex = () => useContext(PokemonContext);
// eslint-disable-next-line react/prop-types
const PokemonProvider = ({ children }) => {
  let pokedex = [];
  let urls = [];
  const loadPokemons = async (url) => {
    let pokemons = [];

    const [data, error] = await pokeApi.getPokemonlist(url);

    urls.push(data.next);

    if (!error) {
      for (const result of data.results) {
        const [pokemon, error] = await pokeApi.getPokemonDetail(result.url);
        if (!error) {
          pokemons.push({
            id: pokemon.id,
            name: pokemon.name,
            image: pokemon.sprites.other["official-artwork"].front_default,
            type: pokemon.types.map((type) => type.type.name),
            order: pokemon.order,
            height: pokemon.height,
          });
        }
      }
    }
    pokedex = [...pokemons];

    return pokedex;
  };

  const getPokemonDetail = async (id) => {
    const [data, _error] = await pokeApi.getPokemonDetail(id);
    if (_error) {
      throw new Error(_error);
    }
    return data;
  };

  return (
    <PokemonContext.Provider
      value={{
        loadPokemons,
        urls,
        getPokemonDetail,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export { PokemonContext, PokemonProvider };
