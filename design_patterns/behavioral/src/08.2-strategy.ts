import { COLORS } from "./helpers/colors.ts";

interface TaxStrategy {
  calculateTax(amount: number): number;
}

class USATaxStrategy implements TaxStrategy {
  public calculateTax(amount: number): number {
    return amount * 0.1;
  }
}

class CanadaTaxStrategy implements TaxStrategy {
  public calculateTax(amount: number): number {
    return amount * 0.13;
  }
}

class GermanyTaxStrategy implements TaxStrategy {
  public calculateTax(amount: number): number {
    return amount * 0.19;
  }
}

class TaxCalculator {
  private strategy: TaxStrategy;

  constructor(strategy: TaxStrategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: TaxStrategy): void {
    this.strategy = strategy;
  }

  public calculate(amount: number): number {
    return this.strategy.calculateTax(amount);
  }
}

function main(): void {
  const taxCalculator: TaxCalculator = new TaxCalculator(new USATaxStrategy());

  console.debug("%cTax calculation:\n", COLORS.red);
  console.debug("USA: $", taxCalculator.calculate(100).toFixed(2));

  console.debug("\nSwitching to strategy for Canada...");
  taxCalculator.setStrategy(new CanadaTaxStrategy());
  console.debug("Canada: $", taxCalculator.calculate(100).toFixed(2));

  console.debug("\nSwitching to strategy for Germany...");
  taxCalculator.setStrategy(new GermanyTaxStrategy());
  console.debug("Germany: $", taxCalculator.calculate(100).toFixed(2));
}

main();
