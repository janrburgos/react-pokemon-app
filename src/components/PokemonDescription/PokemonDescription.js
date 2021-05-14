import "./PokemonDescription.css";

import { Link } from "react-router-dom";
import { connect } from "react-redux";

const PokemonDescription = (props) => {
  return (
    <div className="PokemonDescription">
      <div className="pokemon-image">
        <img src={props.pokemon.art_url} alt={props.pokemon.name} />
      </div>
      <div className="pokemon-description">
        <p className="name">{props.pokemon.name}</p>
        <p className="description">{props.pokemon.description}</p>
        <div className="types">
          {props.pokemon.types.map((type) => (
            <Link key={`desc-types-${type}`} to={`/types/${type}`}>
              <div
                className={type}
                onClick={() => props.getPrevPage(`/types/${type}`)}
              >
                {type}
              </div>
            </Link>
          ))}
        </div>
        <Link to={props.prevPage}>
          <p className="go-back">&#8592; Go Back</p>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = ({ prevPage }) => {
  return {
    prevPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPrevPage: (page) => dispatch({ type: "GET_PREV_PAGE", payload: page }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDescription);
