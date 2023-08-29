/**
 *
 * THE BUILDER PATTERN
 *
 * Is a design pattern lets you construct complex objects step by step and it's used mainly in the object oriented programming paradigm.
 *
 *
 * Usage examples: The Builder pattern is a well-known pattern in TypeScript world. It’s especially useful
 * when you need to create an object with lots of possible configuration options.
 *
 * Identification: The Builder pattern can be recognized in a class, which has a single creation method and
 * several methods to configure the resulting object. Builder methods often support chaining (for example,
 * someBuilder.setValueA(1).setValueB(2).create()).
 *
 */

interface BuilderClass {
  producePartaA(): void;
  producePartaB(): void;
}

class ConcreteBuilder implements BuilderClass {
  private product: ProductFinal;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new ProductFinal();
  }

  public producePartaA(): void {
    this.product.parts.push("PartA");
  }

  public producePartaB(): void {
    this.product.parts.push("PartB");
  }

  public getProduct(): ProductFinal {
    const product: ProductFinal = this.product;
    this.reset();
    return product;
  }
}

class ProductFinal {
  public parts: string[] = [];

  public listParts(): void {
    console.debug(`Products Part: ${this.parts.join(", ")}\n`);
  }
}

class Director {
  private builder: BuilderClass;

  public setBuilder(builder: BuilderClass): void {
    this.builder = builder;
  }

  public buildMinimalProduct(): void {
    this.builder.producePartaA();
  }

  public buildAllProducts(): void {
    this.builder.producePartaA();
    this.builder.producePartaB();
  }
}

function constructorProduct(directoIn: Director) {
  const builder: ConcreteBuilder = new ConcreteBuilder();
  directoIn.setBuilder(builder);

  console.debug("Basic Product Init");
  directoIn.buildMinimalProduct();
  builder.getProduct().listParts();

  console.debug("Full Products Init");
  directoIn.buildAllProducts();
  builder.getProduct().listParts();

  console.debug("Custom Products");
  builder.producePartaA();
  builder.producePartaB();
  builder.getProduct().listParts();
}

const directoNew: Director = new Director();
constructorProduct(directoNew);
