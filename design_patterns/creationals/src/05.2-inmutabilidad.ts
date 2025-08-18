import { COLORS } from "./helpers/colors.ts";

interface PlayerProperties {
  name: string;
  score: number;
  level: number;
}


class Player {
  public readonly name: string;
  public readonly score: number;
  public readonly level: number;

  public constructor({ name, score, level }: PlayerProperties) {
    this.name = name;
    this.score = score;
    this.level = level;
  }

  public copyWith({ name, score, level }: Partial<Player>): Player {
    return new Player({
      name: name ?? this.name,
      score: score ?? this.score,
      level: level ?? this.level
    }
    );
  }

  public displayState(): void {
    console.log(`\n%cPlayer: ${this.name}`, COLORS.green);
    console.log(`%cScore: ${this.score}`, COLORS.yellow);
    console.log(`%cLevel: ${this.level}`, COLORS.blue);
  }
}

function main() {
  let player: Player = new Player({name: "John", score: 0, level: 1});
  console.log("Initial state:");
  player.displayState();

  player = player.copyWith({ score: 10 });
  console.log("\nAfter increasing the score:");
  player.displayState();

  player = player.copyWith({ level: 2 });
  console.log("\nAfter increasing the level:");
  player.displayState();

  player = player.copyWith({ name: "Carlos Pro" });
  console.log("\nAfter changing the name:");
  player.displayState();
}

main();
