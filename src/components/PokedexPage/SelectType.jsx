import useFetch from "../../hooks/useFetch";
import { useEffect } from "react";

const SelectType = ({ setTypeSlected, typeSlected }) => {
  const url = "https://pokeapi.co/api/v2/type";
  const [types, getTypes] = useFetch(url);

  useEffect(() => {
    getTypes();
  }, []);

  const handleChange = (e) => {
    setTypeSlected(e.target.value);
  };

  return (
    <div className="select-type">
      <select className="allpokemons-select" onChange={handleChange}>
        <option value="allPokemons"> AllPokemons </option>
        {types?.results.map((typeInfo) => (
          <option key={typeInfo.url} value={typeInfo.url}>
            {typeInfo.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectType;
