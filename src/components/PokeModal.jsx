/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api/pokeApi";
import { usePokedex } from "../context/PokemonContext";
import { Loader } from "./Loader";

export const PokeModal = () => {
  const { idPokemon } = usePokedex();
  const [detailedPokemon, setDetailedPokemon] = useState();
  const [fail, setFail] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getPokemon = async () => {
    const [data, error] = await pokeApi.getPokemonInfo(idPokemon);
    if (error) {
      setFail(true);
      return;
    }
    setDetailedPokemon(data);
    console.log(detailedPokemon);
    setIsLoading(false);
  };

  useEffect(() => {
    getPokemon();
  }, [idPokemon]);

  return (
    <>
      {/* Put this part before </body> tag */}
      {/* Put this part before </body> tag */}
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {isLoading && <Loader />}
          {detailedPokemon && (
            <main className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={
                    detailedPokemon.sprites.other["official-artwork"]
                      .front_default
                  }
                  alt=""
                  className="w-40 h-50 mr-4"
                />
                <div>
                  <h3 className="text-left">
                    Base XP: {detailedPokemon.base_experience}
                  </h3>
                  {detailedPokemon.stats.map((stat) => (
                    <div className="flex items-center" key={stat.stat.name}>
                      <p className="mr-4 text-left">
                        {stat.stat.name.toUpperCase()}
                      </p>
                      <div className="bg-gray-300 h-4 w-full mr-1">
                        <div
                          className={`bg-blue-500 h-4 w-${
                            stat.base_stat > 100 ? 100 : stat.base_stat
                          }`}
                        />
                      </div>
                      <p className="ml-2">{stat.base_stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </main>
          )}
          {fail && <div>Error: {fail.message}</div>}
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Back
            </label>
          </div>
        </div>
      </div>
    </>
  );
};
