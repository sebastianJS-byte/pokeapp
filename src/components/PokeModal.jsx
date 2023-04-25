import { useMemo } from "react"
import { pokeApi } from "../api/pokeApi"

export const PokeModal = ({ id = 4 }) => {

    /* const getPokemon = async () => {
        console.log(id)
        const poke = await pokeApi.getPokemonInfo(id)
        return poke;
    }

    const [data] = await useMemo(() => getPokemon(), [id])

    console.log(data) */


    return (
        <>
            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Congratulations random Internet user!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <label htmlFor="my-modal" className="btn">Yay!</label>
                    </div>
                </div>
            </div>

            {/* < input type="checkbox" id="my-modal" className="modal-toggle" />
            <label htmlFor="my-modal" className="btn">Yay!</label>
            <div className="modal">
                <div className="modal-box">
                    <div
                        className={`card ${getColorByPokemonType(type[0])} rounded-lg `}
                        onClick={() => { document.getElementById("my-modal").click() }}
                    >
                        <figure className="flex p-5">
                            <img
                                className="absolute bottom-2 right-2 w-20 h-30 "
                                src={image}
                                alt={name}
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-slate-900">
                                {name.toUpperCase()}
                            </h2>
                            <div className="card-actions justify-start">
                                {type.map((type) => (
                                    <div className="badge badge-primary w-3/12 p-2" key={type}>
                                        {type}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}

