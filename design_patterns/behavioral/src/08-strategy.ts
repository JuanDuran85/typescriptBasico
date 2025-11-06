interface MovementStrategy {
  move(): void;
}

class SwimFast implements MovementStrategy {
  public move(): void {
    console.debug("The duck isSwimming fast!");
  }
}

class FlyOverWater implements MovementStrategy {
  public move(): void {
    console.debug("The duck is flying over the water!");
  }
}

class WalkingClumsily implements MovementStrategy {
  public move(): void {
    console.debug("The duck is walking clumsily!");
  }
}
