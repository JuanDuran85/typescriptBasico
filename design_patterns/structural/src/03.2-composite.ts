import { COLORS } from "./helpers/colors.ts";

interface MenuComponent {
  showDetails(indent?: string): void;
}

class MenuItem implements MenuComponent {
  private name: string;
  private price: number;

  public constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  public showDetails(indent: string = ""): void {
    console.debug(
      `${indent}- ${this.name}: %c$${this.price.toFixed(2)}`,
      COLORS.green
    );
  }
}

class MenuCategory implements MenuComponent {
  private name: string;
  private items: MenuComponent[] = [];

  public constructor(name: string) {
    this.name = name;
  }

  public add(item: MenuComponent | MenuComponent[]): void {
    if (Array.isArray(item)) {
      this.items.push(...item);
      return;
    }
    this.items.push(item);
  }

  public showDetails(indent: string = ""): void {
    console.debug(`%c${indent}+ ${this.name}`, COLORS.blue);
    this.items.forEach((item: MenuComponent) =>
      item.showDetails(`${indent}  `)
    );
  }
}

function main() {
  const salad: MenuItem = new MenuItem("Salad", 5.99);
  const soup: MenuItem = new MenuItem("Tomato Soup", 4.99);
  const steak: MenuItem = new MenuItem("Steak", 15.99);
  const soda: MenuItem = new MenuItem("Soda", 2.5);
  const dessert: MenuItem = new MenuItem("Chocolate Mousse", 6.5);
  const coffee: MenuItem = new MenuItem("Coffee", 1.99);

  const appetizers: MenuCategory = new MenuCategory("Appetizer");
  appetizers.add(salad);
  appetizers.add(soup);

  const mainCourse: MenuCategory = new MenuCategory("Main course");
  mainCourse.add(steak);

  const beverages: MenuCategory = new MenuCategory("Beverages");
  beverages.add(soda);
  beverages.add(coffee);

  const desserts: MenuCategory = new MenuCategory("Dessert");
  desserts.add(dessert);

  const mainMenu: MenuCategory = new MenuCategory("Main Menu");
  mainMenu.add([appetizers, beverages, desserts, mainCourse]);

  console.debug("Main Menu Details:");
  mainMenu.showDetails();
}

main();
