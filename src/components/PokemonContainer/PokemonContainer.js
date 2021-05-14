import "./PokemonContainer.css";
import React from "react";
import PokemonGrid from "../PokemonGrid/PokemonGrid";
import PokemonDescription from "../PokemonDescription/PokemonDescription";

import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

const PokemonContainer = (props) => {
  return (
    <div className="PokemonContainer">
      <nav>
        <ul>
          {props.pokemonTypes.map((type) => (
            <Link key={`Link-li-${type}`} to={`/types/${type}`}>
              <li
                key={`li-${type}`}
                className={type}
                onClick={() => props.getPrevPage(`/types/${type}`)}
              >
                {type}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      {/* Display all pokemons */}
      <Route exact path="/">
        <PokemonGrid type="" />
      </Route>
      {/* Display filtered pokemons */}
      {props.pokemonTypes.map((type) => (
        <Route key={`RoutePGrid-${type}`} exact path={`/types/${type}`}>
          <PokemonGrid key={`PGrid-${type}`} type={type} />
        </Route>
      ))}
      {/* Display pokemon description */}
      {props.pokemons.map((pokemon) => (
        <Route
          key={`RoutePDesc-${pokemon.name}`}
          exact
          path={`/${pokemon.name.toLowerCase()}`}
        >
          <PokemonDescription key={`PDesc-${pokemon.name}`} pokemon={pokemon} />
        </Route>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons,
    pokemonTypes: state.pokemonTypes,
    prevPage: state.prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPrevPage: (page) => dispatch({ type: "GET_PREV_PAGE", payload: page }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonContainer);
