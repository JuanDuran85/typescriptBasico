/**
 * Template Method Pattern
 * Template Method Pattern is a behavioral design pattern
 * that defines the skeleton of an algorithm in the superclass. Deferring some steps to subclasses.
 */

abstract class Pizza {
    public makePizza(){
        this.prepareDough();
        this.addTomatoSauce();
        this.addCheese();
        this.addToppings();
        this.bakePizza();

    }

    protected prepareDough(){
        console.debug('Preparando el horno');
    }

    protected addTomatoSauce(){
        console.debug('Agregando salsa de tomate');
    }

    protected addCheese(){
        console.debug('Agregando queso');
    }

    protected abstract addToppings();

    protected bakePizza(){
        console.debug('Cocinando pizza');
    }
}

class PepperoniPizza extends Pizza {
    protected addToppings() {
        console.debug('Agregando toppings');
    }
}

class VegetarianaPizza extends Pizza {
    protected addToppings() {
        console.debug('Agregando toppings');
    }
}

const pepperoniPizza = new PepperoniPizza();
pepperoniPizza.makePizza();
const veganPizza = new VegetarianaPizza();
veganPizza.makePizza();