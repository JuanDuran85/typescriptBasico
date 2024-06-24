interface Component {
  getDatail(): string;
}

class ProductComponent implements Component {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getDatail(): string {
    return this.name;
  }
}

// Decorator
abstract class ProductDecorator implements Component {
  protected component: Component;

  constructor(component: Component) {
    this.component = component;
  }

  public getDatail(): string {
    return this.component.getDatail();
  }
}

// decorator 1

class CommercialInfoProductDecorator extends ProductDecorator {
  private tradeName: string;
  private brand: string;

  constructor(component: Component, tradeName: string, brand: string) {
    super(component);
    this.tradeName = tradeName;
    this.brand = brand;
  }

  public getDatail(): string {
    return `${this.tradeName} - ${this.brand} - ${super.getDatail()}`;
  }
}

// decorator 2
class StoreProductDecorator extends ProductDecorator {
  private price: number;

  constructor(component: Component, price: number) {
    super(component);
    this.price = price;
  }

  public getDatail(): string {
    return `${super.getDatail()} - ${this.price}`;
  }
}

// decorator 3
class HTMLProductDecorator extends ProductDecorator {
  public getDatail(): string {
    return `
        <h1>Información del producto<h1>
        <p>${super.getDatail()}</p>
      `;
  }
}

// ***********Ejecuciones************
// component
const productComponentObj1 = new ProductComponent("casa");
console.debug(productComponentObj1.getDatail());

// decorator 1 con componente
const commercialInfoProdDeco = new CommercialInfoProductDecorator(
  productComponentObj1,
  "pequeña",
  "familiar"
);
console.debug(commercialInfoProdDeco.getDatail());

// decorator 2 con componente
const storeProduct = new StoreProductDecorator(productComponentObj1, 4668.28);
console.debug(storeProduct.getDatail());

// decorator 2 con decorador 1
const storeProduct2 = new StoreProductDecorator(
  commercialInfoProdDeco,
  4668.28
);
console.debug(storeProduct2.getDatail());

// decorator 3 con decorador 1
const htmlProduct = new HTMLProductDecorator(storeProduct2);
console.debug(htmlProduct.getDatail());
