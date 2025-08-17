import { COLORS } from './helpers/colors.ts';
class Pokemon {
  public name: string;
  public type: string;
  public level: number;
  public attacks: string[];

  constructor(name: string, type: string, level: number, attacks: string[]) {
    this.name = name;
    this.type = type;
    this.level = level;
    this.attacks = attacks;
  }

  clone(): Pokemon {
    return new Pokemon(this.name, this.type, this.level, [...this.attacks])
  }

  displayInfo(): void {
    console.log("%c------------------------------------------------- \n",COLORS.red);
    console.log(
      `Name: ${this.name}\nType: ${this.type}\nLevel: ${this.level
      }\nAttacks: ${this.attacks.join(', ')}`
    );
    console.log("-------------------------------------------------");
  }
}

function main() {
  const basePokemon: Pokemon = new Pokemon("Charmander", "Fire", 1, ["Flare", "Scrape"]);
  const clone1: Pokemon = basePokemon.clone();
  clone1.name = "Charmeleon";
  clone1.level = 16;
  clone1.attacks.push("Flamethrower");

  basePokemon.displayInfo();
  clone1.displayInfo();
}

main();

