import "./App.css";
import { useEffect, useState } from "react";
import { usePokedex } from "./context/PokemonContext.jsx";
import { PokeList } from "./components/PokeList";

function App() {
  const { loadPokemons, urls } = usePokedex();
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  async function fetchPokemons() {
    const pokemons = await loadPokemons();
    setPokemonList(pokemons);
    setLoading(false);
  }
  async function handleScroll() {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight) {
      setLoading(true);
      const pokemons = await loadPokemons(urls[urls.length - 1]);
      setPokemonList([...pokemonList, ...pokemons]);
      setLoading(false);
      window.scrollTo(0, 5);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    fetchPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      console.log("desmontado");
    };
  }, [loadPokemons]);

  return (
    <div>
      <div className="navbar bg-zinc-50">
        <div className="navbar-start"></div>
      </div>
      <main className="m-8">
        {loading && "Loading..."}
        <PokeList pokemons={pokemonList} loading={loading} />
      </main>
    </div>
  );
}

export default App;