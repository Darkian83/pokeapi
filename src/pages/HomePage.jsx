import { useRef } from "react";
import { setTrainerSlice } from "../store/slices/trainer.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const HomePage = () => {
  const inputTrainer = useRef();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTrainer = (e) => {
    e.preventDefault();
    dispatch(setTrainerSlice(inputTrainer.current.value.trim()));
    navigate("/pokedex");
  };

  return (
    <div className="home-page-container">
      <img className="logo-pokedex" src={logo} alt="" />
      <h2 className="greeting-container">Hi Trainer!</h2>
      <p className="text-container">
        To start, please, enter your trainer name
      </p>
      <form className="form-contentainer" onSubmit={handleTrainer}>
        <input
          className="search-pokemon-container"
          ref={inputTrainer}
          type="text"
        />
        <button className="pokemon-button">
          <span className="Pokemon">Pokémon </span>
          <span className="Go">Go!</span>
        </button>
      </form>
      <div className=" rectangle-red">
        <div className="rectangle-black"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
};

export default HomePage;
