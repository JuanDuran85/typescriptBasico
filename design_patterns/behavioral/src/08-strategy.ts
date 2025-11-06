import { COLORS } from "./helpers/colors.ts";

interface MovementStrategy {
  move(): void;
}

class SwimFast implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck isSwimming fast!", COLORS.cyan);
  }
}

class FlyOverWater implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck is flying over the water!", COLORS.blue);
  }
}

class WalkingClumsily implements MovementStrategy {
  public move(): void {
    console.debug("%cThe duck is walking clumsily!", COLORS.brown);
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
  }

  public setMovementStrategy(movementStrategy: MovementStrategy): void {
    this.movementStrategy = movementStrategy;
    console.debug(`${this.name} has been changed the strategy`);
  }
}
