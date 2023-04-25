import getColorByPokemonType from "../utils/getColorByPokemonType"

export const PokeCard = ({ type, image, name }) => {
    return (
        <div className="ml-2">
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
    )
}
