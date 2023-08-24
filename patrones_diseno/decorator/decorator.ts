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


// Ejecuciones
// component
const productComponentObj1 = new ProductComponent("casa");
console.debug(productComponentObj1.getDatail());


// decorator 1
const commercialInfoProdDeco = new CommercialInfoProductDecorator(productComponentObj1,"pequeña","familiar");
console.debug(commercialInfoProdDeco.getDatail());