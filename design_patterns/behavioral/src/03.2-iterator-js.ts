class Pokemon {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

class PokemonCollection {
  private pokemonAll: Pokemon[] = [];

  public addPokemon(pokemon: Pokemon): void {
    this.pokemonAll.push(pokemon);
  }

  public *getPokemonIterator(): IterableIterator<Pokemon> {
    for (const pokemon of this.pokemonAll) {
      yield pokemon;
    }
  }

  *[Symbol.iterator](): IterableIterator<Pokemon> {
    yield* this.pokemonAll;
  }
}

function main(): void {
  const pokedex: PokemonCollection = new PokemonCollection();

  pokedex.addPokemon(new Pokemon("Pikachu", "Eléctrico"));
  pokedex.addPokemon(new Pokemon("Charmander", "Fuego"));
  pokedex.addPokemon(new Pokemon("Squirtle", "Agua"));
  pokedex.addPokemon(new Pokemon("Bulbasaur", "Planta"));

  console.debug("Pokemon to show:");
  for (const pokemon of pokedex.getPokemonIterator()) {
    console.debug(`Pokemon: ${pokemon.name}. Type: ${pokemon.type}`);
  }
  console.debug("");
  for (const pokemon of pokedex) {
    console.debug(`Pokemon: ${pokemon.name}. Type: ${pokemon.type}`);
  }
}

main();
