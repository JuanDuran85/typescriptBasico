import { COLORS } from "./helpers/colors.ts";
interface Hamburger {
    prepare(): void
    cook(): void
    cut(): void
    box(): void
}

interface Drink {
    prepare(): void
    boil(): void
    pour(): void
    serve(): void
}

class ChickenBurger implements Hamburger {
    public prepare(): void {
        console.log("Preparing a %cChicken Burger", COLORS.green);
    }
    public cook(): void {
        console.log("Cooking a %cChicken Burger", COLORS.green);
    }
    public cut(): void {
        console.log("Cutting a %cChicken Burger", COLORS.green);
    }
    public box(): void {
        console.log("Boxing a %cChicken Burger", COLORS.green);
    }
}

class BeefBurger implements Hamburger {
    public prepare(): void {
        console.log("Preparing a %cBeef Burger", COLORS.red);
    }
    public cook(): void {
        console.log("Cooking a %cBeef Burger", COLORS.red);
    }
    public cut(): void {
        console.log("Cutting a %cBeef Burger", COLORS.red);
    }
    public box(): void {
        console.log("Boxing a %cBeef Burger", COLORS.red);
    }
}

class WaterDrink implements Drink {
    public prepare(): void {
        console.log("Preparing a %cWater Drink", COLORS.blue);
    }
    public boil(): void {
        console.log("Boiling a %cWater Drink", COLORS.blue);
    }
    public pour(): void {
        console.log("Pouring a %cWater Drink", COLORS.blue);
    }
    public serve(): void {
        console.log("Serving a %cWater Drink", COLORS.blue);
    }
}

class SodaDrink implements Drink {
    public prepare(): void {
        console.log("Preparing a %cSoda Drink", COLORS.yellow);
    }
    public boil(): void {
        console.log("Boiling a %cSoda Drink", COLORS.yellow);
    }
    public pour(): void {
        console.log("Pouring a %cSoda Drink", COLORS.yellow);
    }
    public serve(): void {
        console.log("Serving a %cSoda Drink", COLORS.yellow);
    }
}

abstract class RestaurantFactory {
    public abstract createHamburger(): Hamburger;
    public abstract createDrink(): Drink;
}


class FastFoodRestaurantFactory extends RestaurantFactory {
    public override createHamburger(): Hamburger {
        return new BeefBurger();
    }
    public override createDrink(): Drink {
        return new SodaDrink();
    }
}

class HealthyRestaurantFactory extends RestaurantFactory {
    public override createHamburger(): Hamburger {
        return new ChickenBurger();
    }
    public override createDrink(): Drink {
        return new WaterDrink();
    }
}

function main(factory: RestaurantFactory) {
    const hamburger = factory.createHamburger();
    const drink = factory.createDrink();

    hamburger.prepare();
    hamburger.cook();
    hamburger.cut();
    hamburger.box();

    drink.prepare();
    drink.boil();
    drink.pour();
    drink.serve();
}

console.log("Fast Food Restaurant");
main(new FastFoodRestaurantFactory());

console.log("\nHealthy Restaurant");
main(new HealthyRestaurantFactory());