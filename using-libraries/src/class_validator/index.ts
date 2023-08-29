import {
  IsNotEmpty,
  IsNumber,
  IsPositive,
  ValidationError,
  validate,
} from "class-validator";

export class Products {
  @IsNotEmpty()
  public title: string;

  @IsNumber()
  @IsPositive()
  @IsNotEmpty()
  public price: number;

  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }

  getInformation() {
    return [this.title, `$${this.price}`];
  }
}

const istanceOne = new Products("", -4);
validate(istanceOne).then((result: ValidationError[]) => {
  if (result.length > 0) {
    console.info(result);
    throw new Error("Errores");
  }
  console.debug(istanceOne);
});
