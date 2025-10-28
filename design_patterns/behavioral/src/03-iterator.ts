interface Iterator<T> {
  next(): T | null;
  hasNext(): boolean;
  current(): T | null;
}

class Pokemon {
  constructor(public name: string, public type: string) {}
}

class PokemonCollection {
  private pokemonAll: Pokemon[] = [];

  public addPokemon(pokemon: Pokemon): void {
    this.pokemonAll.push(pokemon);
  }

  public getPokemonAt(index: number): Pokemon | null {
    if (index >= 0 && index < this.pokemonAll.length) {
      return this.pokemonAll[index];
    }

    return null;
  }

  public getLength(): number {
    return this.pokemonAll.length;
  }

  public createIterator(): PokemonIterator {
    return new PokemonIterator(this);
  }
}

class PokemonIterator implements Iterator<Pokemon> {
  private collection: PokemonCollection;
  private position: number = 0;

  constructor(collection: PokemonCollection, position: number = 0) {
    this.collection = collection;
    this.position = position;
  }

  public next(): Pokemon | null {
    if (this.hasNext()) {
      return this.collection.getPokemonAt(this.position++);
    }
    return null;
  }
  public hasNext(): boolean {
    return this.position < this.collection.getLength();
  }
  public current(): Pokemon | null {
    return this.collection.getPokemonAt(this.position);
  }
}

function main() {
  const pokedex: PokemonCollection = new PokemonCollection();

  pokedex.addPokemon(new Pokemon("Pikachu", "Electric"));
  pokedex.addPokemon(new Pokemon("Charmander", "Fire"));
  pokedex.addPokemon(new Pokemon("Squirtle", "Water"));
  pokedex.addPokemon(new Pokemon("Bulbasaur", "Grass/Poison"));

  const iterator: PokemonIterator = pokedex.createIterator();

  while (iterator.hasNext()) {
    const pokemon = iterator.next();
    if (pokemon) {
      console.debug(`Pokemon: ${pokemon.name}, Type: ${pokemon.type}`);
    }
  }
}

main();
