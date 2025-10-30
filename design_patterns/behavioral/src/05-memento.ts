import { COLORS } from "./helpers/colors.ts";

class GameMemento {
  private readonly level: number;
  private readonly health: number;
  private readonly position: string;

  constructor(levelIn: number, health: number, positionIn: string) {
    this.level = levelIn;
    this.health = health;
    this.position = positionIn;
  }

  public getLevel(): number {
    return this.level;
  }

  public getHealth(): number {
    return this.health;
  }

  public getPosition(): string {
    return this.position;
  }
}

class Game {
  private level: number = 1;
  private health: number = 100;
  private position: string = "Start";

  constructor() {
    console.debug(
      `\n %cStaring at
       %cLevel: ${this.level},
       Health: ${this.health},
       Position: ${this.position}
    `,
      COLORS.purple,
      COLORS.red
    );
  }

  public saveGame(): GameMemento {
    return new GameMemento(this.level, this.health, this.position);
  }

  public playGame(level: number, health: number, position: string): void {
    this.level = level;
    this.health = health;
    this.position = position;

    console.debug(
      `\n %cPlaying at
       %cLevel: ${this.level},
       Health: ${this.health},
       Position: ${this.position}
    `,
      COLORS.orange,
      COLORS.pink
    );
  }

  public restoreGame(memento: GameMemento): void {
    this.level = memento.getLevel();
    this.health = memento.getHealth();
    this.position = memento.getPosition();

    console.debug(
      `\n %cRestoring at
       %cLevel: ${this.level},
       Health: ${this.health},
       Position: ${this.position}
    `,
      COLORS.blue,
      COLORS.green
    );
  }
}

class GameHistory {
  private mementos: GameMemento[] = [];

  public addGameMemento(memento: GameMemento): void {
    this.mementos.push(memento);
  }

  public deleteLastGameMemento(): GameMemento | null {
    return this.mementos.pop() ?? null;
  }
}

function main() {
  const game: Game = new Game();
  const history: GameHistory = new GameHistory();

  history.addGameMemento(game.saveGame());

  game.playGame(2, 90, "Middle");
  history.addGameMemento(game.saveGame());

  game.playGame(3, 80, "Middle 2");
  history.addGameMemento(game.saveGame());

  game.playGame(4, 70, "End");

  console.debug(`Actual State: `);
  game.restoreGame(history.deleteLastGameMemento()!);
}

main();
