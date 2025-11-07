import { COLORS } from "./helpers/colors.ts";
interface Visitor {
  visitRollerCoaster(rollerCoasterElement: RollerCoaster): void;
  visitHauntedHouse(hauntedHouseElement: HauntedHouse): void;
  visitFerrisWheel(ferrisWheelElement: FerrisWheel): void;
}

interface AttractionElement {
  accept(visitor: Visitor): void;
  getPrice(): number;
  setPrice(price: number): void;
}

class RollerCoaster implements AttractionElement {
  private price: number;

  constructor(price: number = 50) {
    this.price = price;
  }

  public accept(visitor: Visitor): void {
    visitor.visitRollerCoaster(this);
  }
  public getPrice(): number {
    return this.price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}
class HauntedHouse implements AttractionElement {
  private price: number;

  constructor(price: number = 35) {
    this.price = price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public accept(visitor: Visitor): void {
    visitor.visitHauntedHouse(this);
  }
  public getPrice(): number {
    return this.price;
  }
}

class FerrisWheel implements AttractionElement {
  private price: number;

  constructor(price: number = 25) {
    this.price = price;
  }

  public setPrice(price: number): void {
    this.price = price;
  }

  public accept(visitor: Visitor): void {
    visitor.visitFerrisWheel(this);
  }
  public getPrice(): number {
    return this.price;
  }
}

class ChildVisitor implements Visitor {
  private finalPrice: number = 0;
  private discount: number = 0.2;

  constructor(finalPrice: number, discount: number) {
    this.finalPrice = finalPrice;
    this.discount = discount;
  }

  public visitRollerCoaster(rollerCoasterElement: RollerCoaster): void {
    const fullPrice: number =
      this.finalPrice || rollerCoasterElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;

    console.debug(
      `The child have ${
        this.discount * 100
      } % discount on the roller coaster. Final price: ${this.finalPrice}`
    );
  }
  public visitHauntedHouse(hauntedHouseElement: HauntedHouse): void {
    const fullPrice: number = this.finalPrice || hauntedHouseElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;

    console.debug(
      `The child have ${
        this.discount * 100
      } % discount on the haunted house. Final price: ${this.finalPrice}`
    );
  }
  public visitFerrisWheel(ferrisWheelElement: FerrisWheel): void {
    const fullPrice: number = this.finalPrice || ferrisWheelElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The child have ${
        this.discount * 100
      } % discount on the ferris wheel. Final price: ${this.finalPrice}`
    );
  }
}

class AdultVisitor implements Visitor {
  private finalPrice: number = 0;
  private discount: number = 0;

  constructor(finalPrice: number, discount: number) {
    this.finalPrice = finalPrice;
    this.discount = discount;
  }

  public visitRollerCoaster(rollerCoasterElement: RollerCoaster): void {
    const fullPrice: number =
      this.finalPrice || rollerCoasterElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the roller coaster. Final price: ${this.finalPrice}`
    );
  }
  public visitHauntedHouse(hauntedHouseElement: HauntedHouse): void {
    const fullPrice: number = this.finalPrice || hauntedHouseElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the haunted house. Final price: ${this.finalPrice}`
    );
  }
  public visitFerrisWheel(ferrisWheelElement: FerrisWheel): void {
    const fullPrice: number = this.finalPrice || ferrisWheelElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the ferris wheel. Final price: ${this.finalPrice}`
    );
  }
}

class SeniorAdultVisitor implements Visitor {
  private finalPrice: number = 0;
  private discount: number = 0.35;

  constructor(finalPrice: number, discount: number) {
    this.finalPrice = finalPrice;
    this.discount = discount;
  }

  public visitRollerCoaster(rollerCoasterElement: RollerCoaster): void {
    const fullPrice: number =
      this.finalPrice || rollerCoasterElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the roller coaster. Final price: ${this.finalPrice}`
    );
  }
  public visitHauntedHouse(hauntedHouseElement: HauntedHouse): void {
    const fullPrice: number = this.finalPrice || hauntedHouseElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the haunted house. Final price: ${this.finalPrice}`
    );
  }
  public visitFerrisWheel(ferrisWheelElement: FerrisWheel): void {
    const fullPrice: number = this.finalPrice || ferrisWheelElement.getPrice();
    this.finalPrice = fullPrice - fullPrice * this.discount;
    console.debug(
      `The adult have ${
        this.discount * 100
      } % discount on the ferris wheel. Final price: ${this.finalPrice}`
    );
  }
}

function main() {
  const attractions: AttractionElement[] = [
    new RollerCoaster(),
    new HauntedHouse(),
    new FerrisWheel(),
  ];

  console.debug(`%c----- Actual Prices -----`, COLORS.yellow);
  attractions.forEach((attractionsElement) => {
    console.debug(
      `Attraction: ${
        attractionsElement.constructor.name
      }, Price: ${attractionsElement.getPrice()}`
    );
  });
  console.debug(`\n`);
}

main();
