import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import useFetch from "../hooks/useFetch";
import PokeCard from "../components/PokedexPage/PokeCard";
import SelectType from "../components/PokedexPage/SelectType";
import Pagination from "../components/Pagination";
import logo from "../assets/logo.png";

const PokedexPages = () => {
  const [inputValue, setInputValue] = useState("");

  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=25"
  );

  const [typeSlected, setTypeSlected] = useState("allPokemons");

  const trainer = useSelector((store) => store.trainer);

  const inputSearch = useRef();

  const [pokemons, getPokemons, getTypePokemon] = useFetch(url);

  useEffect(() => {
    if (typeSlected === "allPokemons") {
      getPokemons();
    } else {
      getTypePokemon(typeSlected);
    }
  }, [typeSlected]);

  useEffect(() => {
    getPokemons();
  }, [url]);

  const handleSearch = (e) => {
    e.preventDefault();
    setInputValue(inputSearch.current.value.trim().toLowerCase());
  };

  const pokeFiltered = pokemons?.results.filter((poke) =>
    poke.name.includes(inputValue)
  );

  console.log(url);
  return (
    <div>
      <header className="rectangle-red-id">
        <div className="rectangle-black-id"></div>
        <div className="circle-list"></div>
        <img
          className="logo-id"
          src={logo}
          alt=""
          onClick={() => {
            navigate(`/pokedex`);
          }}
        />
      </header>

      <div className="input-greeting-button">
        {" "}
        <p className="welcome">
          Hi {trainer}, Let's go find your favorite pokemon{" "}
        </p>
        <form className="form" onSubmit={handleSearch}>
          <input
            className="input-form"
            ref={inputSearch}
            type="text"
            placeholder="Search Pokemon"
          />
          <button className="button-search">Search</button>
        </form>
      </div>
      <div className="select-type-container">
        <SelectType
          typeSlected={typeSlected}
          setTypeSlected={setTypeSlected}
        />
      </div>

      <Pagination
        pokemons={pokemons?.results}
        previous={pokemons?.previous}
        next={pokemons?.next}
        setUrl={setUrl}
      />

      <div className="poke-grid">
        {pokeFiltered?.map((poke) => (
          <PokeCard key={poke.url} url={poke.url} />
        ))}
      </div>
      <Pagination
        pokemons={pokemons?.results}
        previous={pokemons?.previous}
        next={pokemons?.next}
        setUrl={setUrl}
      />
    </div>
  );
};

export default PokedexPages;
