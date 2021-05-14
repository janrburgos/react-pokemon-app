import "./PokemonBox.css";
import React from "react";

const PokemonBox = ({ pokemon }) => {
  let firstBgColor;
  let secondBgColor;

  // first background color
  switch (pokemon.types[0]) {
    case "normal":
      firstBgColor = "#A8A878";
      break;
    case "fire":
      firstBgColor = "#F08030";
      break;
    case "water":
      firstBgColor = "#6890F0";
      break;
    case "grass":
      firstBgColor = "#78C850";
      break;
    case "electric":
      firstBgColor = "#F8D030";
      break;
    case "ice":
      firstBgColor = "#98D8D8";
      break;
    case "fighting":
      firstBgColor = "#C03028";
      break;
    case "poison":
      firstBgColor = "#A040A0";
      break;
    case "ground":
      firstBgColor = "#E0C068";
      break;
    case "flying":
      firstBgColor = "#A890F0";
      break;
    case "psychic":
      firstBgColor = "#F85888";
      break;
    case "bug":
      firstBgColor = "#A8B820";
      break;
    case "rock":
      firstBgColor = "#B8A038";
      break;
    case "ghost":
      firstBgColor = "#705898";
      break;
    case "dark":
      firstBgColor = "#705848";
      break;
    case "dragon":
      firstBgColor = "#7038F8";
      break;
    case "steel":
      firstBgColor = "#B8B8D0";
      break;
    case "fairy":
      firstBgColor = "#F0B6BC";
      break;

    default:
      firstBgColor = "silver";
      break;
  }
  // second background color
  switch (pokemon.types[1]) {
    case "normal":
      secondBgColor = "#A8A878";
      break;
    case "fire":
      secondBgColor = "#F08030";
      break;
    case "water":
      secondBgColor = "#6890F0";
      break;
    case "grass":
      secondBgColor = "#78C850";
      break;
    case "electric":
      secondBgColor = "#F8D030";
      break;
    case "ice":
      secondBgColor = "#98D8D8";
      break;
    case "fighting":
      secondBgColor = "#C03028";
      break;
    case "poison":
      secondBgColor = "#A040A0";
      break;
    case "ground":
      secondBgColor = "#E0C068";
      break;
    case "flying":
      secondBgColor = "#A890F0";
      break;
    case "psychic":
      secondBgColor = "#F85888";
      break;
    case "bug":
      secondBgColor = "#A8B820";
      break;
    case "rock":
      secondBgColor = "#B8A038";
      break;
    case "ghost":
      secondBgColor = "#705898";
      break;
    case "dark":
      secondBgColor = "#705848";
      break;
    case "dragon":
      secondBgColor = "#7038F8";
      break;
    case "steel":
      secondBgColor = "#B8B8D0";
      break;
    case "fairy":
      secondBgColor = "#F0B6BC";
      break;

    default:
      secondBgColor = firstBgColor;
      break;
  }

  const bgColors = {
    "--first-bg-color": firstBgColor,
    "--second-bg-color": secondBgColor,
  };

  return (
    <div className="PokemonBox" style={bgColors}>
      <p className="pokemon-name">{pokemon.name}</p>
      <img src={pokemon.art_url} alt={pokemon.name} />
      <p className="pokemon-id">
        {pokemon.national_id < 10
          ? `#00${pokemon.national_id}`
          : pokemon.national_id < 100
          ? `#0${pokemon.national_id}`
          : `#${pokemon.national_id}`}
      </p>
    </div>
  );
};

export default PokemonBox;
