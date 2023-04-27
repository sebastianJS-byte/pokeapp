import { useState } from "react";
/* eslint-disable react/prop-types */
import { usePokedex } from "../context/PokemonContext";
import { getColorByPokemonType } from "../utils/getColorByPokemonType";
import { PokeModal } from "./PokeModal";

export const PokeCard = ({ type, image, name, id }) => {
  const { setId } = usePokedex();
  const [show, setShow] = useState(false);
  function handleClick() {
    console.log("click");
    setId(id);
    setShow(true);
    document.getElementById("my-modal").click();
  }
  return (
    <div className="ml-2">
      <div
        className={`card ${getColorByPokemonType(type[0])} rounded-lg `}
        onClick={() => handleClick()}
      >
        <figure className="flex p-5">
          <img
            className="absolute bottom-2 right-2 w-20 h-30 "
            src={image}
            alt={name}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-slate-900 text-xl">
            {name.toUpperCase()}
          </h2>
          <div className="card-actions justify-start">
            {type.map((type) => (
              <div className="badge badge-primary w-3/12 p-2" key={type}>
                {type.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </div>
      {show && <PokeModal id={id} />}
    </div>
  );
};
