import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";
import capitalizeString from "../utils/capitalize";
import logo from "../assets/logo.png";

const PokedexIdPage = () => {
  const { id } = useParams();

  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const [pokemon, getPokemon] = useFetch(url);

  useEffect(() => {
    getPokemon();
  }, [id]);

  const navigate = useNavigate();

  console.log(pokemon);

  return (
    <div className="main-container">
      <div
        className="back"
        onClick={() => {
          navigate(`/pokedex`);
        }}
      >
        &lt;
      </div>
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
      <div
        className={`bg-${pokemon?.types[0].type.name} header-container`}
      >
        {" "}
        <button
          className="back-button"
          onClick={() => {
            navigate(`/pokedex/${parseInt(id) - 1}`);
          }}
        >
          &lt;
        </button>
        <img
          className="poke-img"
          src={
            pokemon?.sprites.other["official-artwork"].front_default
          }
          alt=""
        />
        <button
          className="next-button"
          onClick={() => {
            navigate(`/pokedex/${parseInt(id) + 1}`);
          }}
        >
          &gt;
        </button>
      </div>
      <p className="pokemon-number">#{pokemon?.id}</p>
      <h2 className="pokemon-name">
        {capitalizeString(pokemon?.name)}
      </h2>
      <div className="container-stats">
        {" "}
        <div className="name-stats">
          <span> Wheigth </span>
          <span>Heigth </span>
        </div>
        <div className="height-weight-container">
          {" "}
          <span>{pokemon?.weight} </span>
          <span>{pokemon?.height} </span>
        </div>
        <div className="type-abilities">
          <div className="types-container">
            <p>Types</p>
            {pokemon?.types.map((type, idx) => (
              <span className={`type bg-${type.type.name}`} key={idx}>
                {capitalizeString(type.type.name)}{" "}
              </span>
            ))}
          </div>
          <div className="abilities-container">
            <p>Abilities</p>
            {pokemon?.abilities.map((ability, idx) => (
              <span className="ability" key={idx}>
                {capitalizeString(ability.ability.name)}{" "}
              </span>
            ))}
          </div>
        </div>
        <div className="stats-container-values">
          <div className="stats-values">
            {pokemon?.stats.map((stat, i) => (
              <div key={i} className="stats-number-container">
                <span>{capitalizeString(stat.stat.name)} </span>{" "}
                <span>{stat["base_stat"]}</span>
                <div
                  style={{
                    width: "100%",
                    height: "25px",
                    backgroundColor: "#ccc",
                  }}
                >
                  <div
                    className="stats-bar"
                    style={{
                      width: `${Math.round(
                        (stat.base_stat / 255) * 100
                      )}%`,
                      height: "25px",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="moves-container">
          <hr className=" separator" />
          <h2 className="movement-title">Movements</h2>
          <div className="move-container">
            {pokemon?.moves.map((move, index) => (
              <span key={index} className="move">
                {capitalizeString(move.move.name)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokedexIdPage;
