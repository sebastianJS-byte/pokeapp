/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import getColorByPokemonType from "../utils/getColorByPokemonType";

export const PokeList = ({ pokemons, loading }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {pokemons.map((pokemon) => {
        return (
          <div key={pokemon.id} className="ml-2">
            <div
              className={`card ${getColorByPokemonType(
                pokemon.type[0]
              )} rounded-lg`}
            >
              <figure className="flex p-5">
                <img
                  className="absolute bottom-2 right-2 w-20 h-30 "
                  src={pokemon.image}
                  alt={pokemon.name}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-slate-900">
                  {pokemon.name.toUpperCase()}
                </h2>
                <div className="card-actions justify-start">
                  {pokemon.type.map((type) => (
                    <div className="badge badge-primary w-3/12 p-2" key={type}>
                      {type}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
