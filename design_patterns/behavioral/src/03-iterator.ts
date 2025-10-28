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

  public createIterator(): Iterator<Pokemon> {
    throw new Error("Method not implemented.");
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
