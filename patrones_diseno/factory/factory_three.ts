/**
 *
 * Simple Factory Pattern
 *
 * The simple factory pattern is also called the static method pattern, because a static method is
 * defined in the factory class to create an object. Simple factories allow users to create the desired
 * “product” class without knowing the specific parameters, that is, the user can directly consume the
 * product without knowing the specific production details of the product.
 *
 */



// simple factory to describe the process of producing a given model of car in a vehicle factory.

// 1. Define an abstract class Vehicle and its two subclasses VehicleSuperX01 and VehicleSuperX02 to represent different types of vehicles.
abstract class Vehicle {
    abstract run(): void;
}

class VehicleSuperX01 extends Vehicle {
    run(): void {
        console.debug("VehicleSuperX01");
    }
}

class VehicleSuperX02 extends Vehicle {
    run(): void {
        console.debug("VehicleSuperX02");
    }
}

//2. define the VehiculeSuperXFactory class to represent the vehicle factory.

const vhSx01: VehicleSuperX01 = new VehicleSuperX01();
vhSx01.run();
const vhSx02: VehicleSuperX02 = new VehicleSuperX02();
vhSx02.run();


/*
The usage scenarios of the simple factory pattern:

- The factory class is responsible for creating fewer objects: Since there are fewer objects created, the business logic in the factory method will not be too complicated.
- The client only needs to know the parameters passed to the static method of the factory class, and does not need to care about the details of creating an object.
*/
