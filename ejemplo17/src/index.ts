import axios from "axios";
import { Pokemon } from "./interfaces/pokemon.interface";

const getPokemon = async (pokemonId: number): Promise<Pokemon> => {
  try {
    const { data } = await axios.get<Pokemon>(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    return data;
  } catch (error) {
    throw new Error(`Error en peticion: ${error}`);
  }
};

getPokemon(1)
  .then((pokemon: Pokemon) => {
    console.debug(pokemon);
    console.debug(pokemon.name);
    console.debug(pokemon.sprites.front_default);
  })
  .catch((error) => error);
