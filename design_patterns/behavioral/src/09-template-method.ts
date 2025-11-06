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