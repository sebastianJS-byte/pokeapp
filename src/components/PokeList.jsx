/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { PokeCard } from "./PokeCard";

export const PokeList = ({ pokemons, loading }) => {

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {
        pokemons.map((pokemon) => {
          return (
            <PokeCard key={pokemon.id} {...pokemon} />
          );
        })
      }
    </div >
  );
};
