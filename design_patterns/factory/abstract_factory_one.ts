/**
 *
 * THE ABSTRACT FACTORY PATTERN
 *
 * The abstract factory pattern provides an interface for creating a series of related or interdependent
 * objects without specifying their concrete classes.
 *
 * In the factory method pattern, a specific factory is responsible for producing specific products, each
 * specific factory corresponds to a specific product, and the factory method is also unique. In general,
 * there is only one factory method or a group of overloaded factory methods in a specific factory. But
 * sometimes we need a factory that can supply multiple products, not a single product.
 *
 */


//1. define an abstract class Vehicle and its two subclasses SuperX01 and SuperX02 to represent different types of vehicles.

abstract class VehicleThree {
    abstract run(): void;
}

class VehicleThreeSuperX01 extends VehicleThree {
    run(): void {
        console.debug("VehicleThreeSuperX01 init");
    }
}

class VehicleThreeSuperX02 extends VehicleThree {
    run(): void {
        console.debug("VehicleThreeSuperX02 init");
    }
}

//2. define the SuperXFactory class to represent the vehicle factory. This abstract factory contains abstract methods for producing SuperCX01 and SuperCX02 model vehicles.

abstract class SuperXFactory {
    abstract produceSuperCX01():VehicleThreeSuperX01;
    abstract produceSuperCX02():VehicleThreeSuperX02;
}

//3. Based on the SuperXFactory abstract class, we define the ConcreteSuperCX0Factory factory classe for the production of SuperCX01 and SuperCX02 models of vehicles:

class ConcreteSuperCX0Factory extends SuperXFactory {
    public produceSuperCX01(): VehicleThreeSuperX01 {
        return new VehicleThreeSuperX01();
    }

    public produceSuperCX02(): VehicleThreeSuperX02 {
        return new VehicleThreeSuperX02();
    }
}

//3. After creating the ConcreteSuperCX0Factory factory classe, we can start producing vehicles:
const concreteFactoryCar = new ConcreteSuperCX0Factory();
const superCX01 = concreteFactoryCar.produceSuperCX01();
const superCX02 = concreteFactoryCar.produceSuperCX02();

superCX01.run();
superCX02.run();

/*
The biggest difference between the abstract factory pattern and the factory method pattern is that the factory method pattern is aimed at a product hierarchy, while the abstract factory pattern needs to face multiple product hierarchy structures, and a factory hierarchy structure can be responsible for multiple different product hierarchy structures.
*/