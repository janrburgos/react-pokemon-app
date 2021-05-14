import pokedex from "../data/pokedex.json";

const initialState = {
  pokemons: pokedex,
  pokemonTypes: [
    "all",
    "normal",
    "fire",
    "water",
    "grass",
    "electric",
    "ice",
    "fighting",
    "poison",
    "ground",
    "flying",
    "psychic",
    "bug",
    "rock",
    "ghost",
    "dark",
    "dragon",
    "steel",
    "fairy",
  ],
  prevPage: "/",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PREV_PAGE": {
      return {
        ...state,
        prevPage: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
