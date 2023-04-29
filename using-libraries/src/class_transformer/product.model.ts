export class Products {
   public title: string;
   public price: number;

   constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
   }

   getInformation(){
    return [this.title, `$${this.price}`];
   }
}