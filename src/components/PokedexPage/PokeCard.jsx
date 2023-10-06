import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";

const PokeCard = ({ url }) => {
  const [pokemon, getPokemon] = useFetch(url);

  const navigate = useNavigate();

  useEffect(() => {
    getPokemon();
  }, []);

  const handleNavigate = () => {
    navigate(`/pokedex/${pokemon.id}`);
  };

  return (
    <article
      className={`cards-info ${pokemon?.types[0]?.type.name}`}
      onClick={handleNavigate}
    >
      <header className="image-container">
        <img
          src={
            pokemon?.sprites.other["official-artwork"].front_default
          }
          alt=""
        />
      </header>
      <section className="poke-type-info">
        <h3 className="poke-name">{pokemon?.name}</h3>
        <ul className="poke-type-container">
          {pokemon?.types.map((typeInfo) => (
            <li className="poke-type" key={typeInfo.type.url}>
              {typeInfo.type.name}
            </li>
          ))}
        </ul>
        <hr className="separator" />
        <ul className="stats-container">
          {pokemon?.stats.map((statInfo) => (
            <li className="stat" key={statInfo.stat.url}>
              <p className="stat-name">{statInfo.stat.name}</p>
              <p className="stat-value">{statInfo.base_stat}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PokeCard;
