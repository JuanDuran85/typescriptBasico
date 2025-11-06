import { COLORS } from "./helpers/colors.ts";

abstract class HotBeverageTemplate {
  public makeBeverage(): void {
    this.boilWater();
    this.addMainIngredient();
    this.pourInCup();
    this.addCondiments();
  }

  private boilWater(): void {
    console.debug(`The water is boiling`);
  }

  private pourInCup(): void {
    console.debug(`Pouring in a cup`);
  }

  protected abstract addMainIngredient(): void;
  protected abstract addCondiments(): void;
}

class Tea extends HotBeverageTemplate {
  protected addMainIngredient(): void {
    console.debug(`Adding tea leaves`);
  }
  protected addCondiments(): void {
    console.debug(`Adding lemon and sugar`);
  }
}

class Coffee extends HotBeverageTemplate {
  protected addMainIngredient(): void {
    console.debug(`Adding coffee grounds`);
  }
  protected addCondiments(): void {
    console.debug(`Adding milk and sugar`);
  }
}

function main() {
  console.debug("Preparing Tea", COLORS.green);
  const tea01: Tea = new Tea();
  tea01.makeBeverage();

  console.debug("\nPreparing Coffee", COLORS.brown);
  const coffee01: Coffee = new Coffee();
  coffee01.makeBeverage();
}

main();
