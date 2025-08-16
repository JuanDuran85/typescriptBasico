import { COLORS } from "./helpers/colors.ts";

interface Hamburger {
    prepare(): void;
    cook(): void;
    cut(): void;
    box(): void;
}

class ChickenHamburger implements Hamburger {
    prepare(): void {
        console.log("%cPreparing a Chicken Hamburger", COLORS.green);
    }
    cook(): void {
        console.log("Cooking a Chicken Hamburger");
    }
    cut(): void {
        console.log("Cutting a Chicken Hamburger");
    }
    box(): void {
        console.log("Boxing a Chicken Hamburger");
    }
}

class BeefHamburger implements Hamburger {
    prepare(): void {
        console.log("%cPreparing a Beef Hamburger", COLORS.purple);
    }
    cook(): void {
        console.log("Cooking a Beef Hamburger");
    }
    cut(): void {
        console.log("Cutting a Beef Hamburger");
    }
    box(): void {
        console.log("Boxing a Beef Hamburger");
    }
}


abstract class Restaurant {
    protected abstract createHamburger(): Hamburger;

    orderHamburger(): void {
        const hamburger: Hamburger = this.createHamburger();
        hamburger.prepare();
        hamburger.cook();
        hamburger.cut();
        hamburger.box();
    }
}

class ChickenRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new ChickenHamburger();
    }
}

class BeefRestaurant extends Restaurant {
    override createHamburger(): Hamburger {
        return new BeefHamburger();
    }
}

function main() {
    let restaurant: Restaurant;

    const burgerType: string | null = prompt("What type of burger do you want? (chicken/beef)");

    switch (burgerType) {
        case "chicken":
            restaurant = new ChickenRestaurant();
            break;
        case "beef":
            restaurant = new BeefRestaurant();
            break;
        default:
            throw new Error("Invalid burger type");
    }

    restaurant.orderHamburger();
}

main();