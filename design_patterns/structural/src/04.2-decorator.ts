type Stats = { attack: number; defense: number };

interface Character {
  getDescription(): string;
  getStats(): Stats;
}

abstract class CharacterDecorator implements Character {
  protected character: Character;

  public constructor(character: Character) {
    this.character = character;
  }
  public getDescription(): string {
    return this.character.getDescription();
  }
  public getStats(): Stats {
    return this.character.getStats();
  }
}

class BasicCharacter implements Character {
  public getDescription(): string {
    console.debug("Basic Character");
    return "Basic Character";
  }
  public getStats(): Stats {
    console.debug("Basic Stats");
    return { attack: 10, defense: 10 };
  }
}

class HelmetDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return `${this.character.getDescription()}\n * with Helmet`;
  }

  public override getStats(): Stats {
    const stats: Stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 5 };
  }
}

class ShieldDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return `${this.character.getDescription()}\n * with Shield`;
  }

  public override getStats(): Stats {
    const stats: Stats = this.character.getStats();
    return { attack: stats.attack, defense: stats.defense + 10 };
  }
}

class SwordDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return `${this.character.getDescription()}\n * with Sword`;
  }

  public override getStats(): Stats {
    const stats: Stats = this.character.getStats();
    return { attack: stats.attack + 7, defense: stats.defense };
  }
}

class RingDecorator extends CharacterDecorator {
  public override getDescription(): string {
    return `${this.character.getDescription()}\n * with Ring`;
  }

  public override getStats(): Stats {
    const stats: Stats = this.character.getStats();
    return { attack: stats.attack + 3, defense: stats.defense };
  }
}

function main() {
  let character: Character = new BasicCharacter();
  console.debug("\nInitial Character:", character.getDescription());
  console.debug("Stats:", character.getStats());

  character = new HelmetDecorator(character);
  console.debug("\nWith Helmet:", character.getDescription());
  console.debug("Stats:", character.getStats());

  character = new ShieldDecorator(character);
  console.debug("\nWith Shield:", character.getDescription());
  console.debug("Stats:", character.getStats());

  character = new SwordDecorator(character);
  console.debug("\nWith Sword:", character.getDescription());
  console.debug("Stats:", character.getStats());

  character = new RingDecorator(character);
  console.debug("\nWith Ring:", character.getDescription());
  console.debug("Stats:", character.getStats());

  console.debug("\n\n");
}

main();
