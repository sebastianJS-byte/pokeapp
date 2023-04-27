import { useState } from "react";
/* eslint-disable react/prop-types */
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement,
} from "chart.js";
import { getPokemonColor } from "../utils/getColorByPokemonType";
import { usePokedex } from "../context/PokemonContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ArcElement
);

function GraphPoke(props) {
  const { setType } = usePokedex();
  const [graph, setGraph] = useState(false);
  // Aquí debes definir los datos de la gráfica, utilizando los datos de los pokémon recibidos por props.
  // Puedes hacerlo de la siguiente manera:

  const pokemonByType = props.pokemonData.reduce((accumulator, pokemon) => {
    // Obtenemos los tipos del Pokémon actual
    const types = pokemon.type;

    // Por cada tipo, incrementamos su contador en el objeto de acumulación
    types.forEach((type) => {
      accumulator[type] = (accumulator[type] || 0) + 1;
    });

    return accumulator;
  }, {});

  console.log(pokemonByType);

  const data = {
    labels: Object.keys(pokemonByType).map((key) => key.toLocaleUpperCase()), // aquí se colocarán los nombres de los tipos de pokémon
    datasets: [
      {
        label: "Número de pokémon por tipo",
        data: Object.values(pokemonByType), // aquí se colocará el número de pokémon de cada tipo
        backgroundColor: Object.keys(pokemonByType).map((key) =>
          getPokemonColor(key)
        ), // aquí se colocarán los colores de cada tipo de pokémon
      },
    ],
  };
  return (
    <>
      <input type="checkbox" id="my-graph" className="modal-toggle" />
      <div id="my-graph" className="modal modal-bottom md:modal-middle">
        <div className="modal-box">
          <h2>PokeGraph</h2>
          {graph ? (
            <Bar
              key="bar-chart"
              data={data}
              options={{
                onClick: (event, element) => {
                  setType(Object.keys(pokemonByType)[element[0].index]);
                  console.log(Object.keys(pokemonByType)[element[0].index]);
                },
              }}
            />
          ) : (
            <Pie key="pie-chart" data={data} />
          )}
          <div className="modal-action">
            <label htmlFor="my-graph" className="btn">
              Exit
            </label>
            <button className="btn btn-info" onClick={() => setGraph(!graph)}>
              {" "}
              {graph ? "PIE" : "BAR"}{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default GraphPoke;
