type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  public constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  public isProductReady(): boolean {
    for (const key in this) {
      console.log(`${key}: ${typeof this[key]}`);
      console.log(`${key}: ${this[key]}`);
      switch (typeof this[key]) {
        case "string":
          if (this[key].length <= 0)
            throw new Error(`${key} is required and not empty`);
          break;
        case "number":
          if (this[key] <= 0)
            throw new Error(`${key} is required and not empty`);
          break;
        default:
          throw new Error(`${key} is not a valid type`);
      }
    }
    return true;
  }

  public toString(): string {
    return this.isProductReady()
      ? `The product: ${this.name}, has a price of: ${this.price}, and a size of: ${this.price}`
      : "";
  }
}

(() => {
  const bluePant = new Product("Blue large pant", 15.99, "M");
  console.log(bluePant.toString());
})();
