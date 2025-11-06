import { COLORS } from "./helpers/colors.ts";

interface MovementStrategy {
  move(): void;
}

class SwimFast implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck isSwimming fast!\n", COLORS.cyan);
  }
}

class FlyOverWater implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck is flying over the water!\n", COLORS.blue);
  }
}

class WalkingClumsily implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck is walking clumsily!\n", COLORS.brown);
  }
}

class Duck {
  private name: string;
  private movementStrategy: MovementStrategy;

  constructor(name: string, movementStrategy: MovementStrategy) {
    this.name = name;
    this.movementStrategy = movementStrategy;

    console.debug("%cReady duck: ", COLORS.green, this.name);
  }

  public performMove(): void {
    console.debug(
      `The duck: %c${this.name} %cis ready to move`,
      COLORS.green,
      COLORS.white
    );
    this.movementStrategy.move();
  }

  public setMovementStrategy(movementStrategy: MovementStrategy): void {
    this.movementStrategy = movementStrategy;
    console.debug(`${this.name} has been changed the strategy`);
  }
}

function main() {
  const duck01: Duck = new Duck("Daisy SwimFast", new SwimFast());
  const duck02: Duck = new Duck("Donald FlyOverWater", new FlyOverWater());
  const duck03: Duck = new Duck("Daffy WalkingClumsily", new WalkingClumsily());

  console.debug("--------- Start Game ---------");
  duck01.performMove();
  duck02.performMove();
  duck03.performMove();

  console.debug("--------- Change Strategies ---------");
  duck01.setMovementStrategy(new FlyOverWater());
  duck02.setMovementStrategy(new WalkingClumsily());
  duck03.setMovementStrategy(new SwimFast());

  console.debug("--------- Continue Game ---------");
  duck01.performMove();
  duck02.performMove();
  duck03.performMove();
}

main();
