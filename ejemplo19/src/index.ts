import { Pokemon, Pokemon2 } from "./classes/pokemon.classes";

const charmander = new Pokemon("Charmander");

//(Pokemon2.prototype as any).customName = "Pikachu";

const nuevoPoke = new Pokemon2("Nuevo Poke enviado");

nuevoPoke.publicApi = 'https//alirafael.com';

nuevoPoke.savaPokemonToDb(11);


console.log(nuevoPoke);