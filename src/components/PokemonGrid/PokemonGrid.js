import "./PokemonGrid.css";
import PokemonBox from "../PokemonBox/PokemonBox";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PokemonGrid = ({ pokemons, type }) => {
  return (
    <div className="PokemonGrid">
      {(type === "" || type === "all"
        ? pokemons
        : pokemons.filter((pokemon) => pokemon.types.indexOf(type) !== -1)
      ).map((pokemon) => (
        <Link
          key={`LinkPID${pokemon.pkdx_id}`}
          to={`../${pokemon.name.toLowerCase()}`}
        >
          <PokemonBox pokemon={pokemon} />
        </Link>
      ))}
    </div>
  );
};

const mapStateToProps = ({ pokemons }) => {
  return {
    pokemons,
  };
};

export default connect(mapStateToProps)(PokemonGrid);
