/* eslint-disable react/prop-types */
import { useState } from "react";
import { useEffect } from "react";
import { pokeApi } from "../api/pokeApi";
import { usePokedex } from "../context/PokemonContext";

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
      <input type="checkbox" id="my-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          {isLoading && <div>Loading...</div>}
          <main className="flex justify-between">
            <div className="flex flex-col items-start">
              <h3 className="text-left">
                Base XP: {detailedPokemon?.base_experience}
              </h3>
              <img
                src={
                  detailedPokemon?.sprites.other["official-artwork"]
                    .front_default
                }
                alt=""
                className=" w-40 h-50"
              />
            </div>
            <div className="flex flex-col items-left">
              {detailedPokemon?.stats.map((stat) => (
                <div className="flex items-center" key={stat.stat.name}>
                  <p className="mr-4 text-left">
                    {stat.stat.name.toUpperCase()}
                  </p>
                  <div className="bg-gray-300 h-4 w-full mr-20">
                    <div className={`bg-blue-500 h-4 w-${stat.base_stat}`} />
                  </div>
                </div>
              ))}
            </div>
          </main>

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
