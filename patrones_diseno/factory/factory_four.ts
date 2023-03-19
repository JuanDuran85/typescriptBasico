/**
 * 
 * THE FACTORY METHOD PATTERN
 * 
 * The factory method pattern, also known as the factory pattern, is also called the polymorphic
 * factory pattern, which belongs to the creational pattern.
 * 
 * In the factory method pattern, the factory parent class is responsible for defining the public
 * interface for creating product objects, while the factory subclass is responsible for generating
 * specific product objects. The purpose of this is to delay the instantiation of the product class to
 * the factory subclass. That is, through the factory subclass to determine which specific product
 * class should be instantiated.
 * 
 */

// 1. Define an abstract class Vehicle and its two subclasses VehicleSuperX01 and VehicleSuperX02 to represent different types of vehicles.
abstract class VehicleNew {
    abstract run(): void;
}

class VehicleNewSuperX01 extends VehicleNew {
    run(): void {
        console.log("VehicleSuperX01 init");
    }
}

class VehicleNewSuperX02 extends VehicleNew {
    run(): void {
        console.log("VehicleSuperX02 init");
    }
}

// Define the VehicleFactory class to represent the vehicle factory. The abstract class contains an abstract method produceVehicle, which is the so-called factory method.

abstract class VehicleNewFactory {
    abstract produceVehicle(): VehicleNew
}

// Based on the VehicleNewFactory abstract class... Define the VehicleNewSuperX01Factory and VehicleNewSuperX02Factory factory classes for the production of SuperX01 and SuperX02 models of vehicles

class VehicleNewSuperX01Factory extends VehicleNewFactory {
    produceVehicle(): VehicleNew {
        console.log("Vehicle New SuperX01 start to produce vehicle");
        return new VehicleNewSuperX01();
    }
}

class VehicleNewSuperX02Factory extends VehicleNewFactory {
    produceVehicle(): VehicleNew {
        console.log("Vehicle New SuperX02 start to produce vehicle");
        return new VehicleNewSuperX02();
    }
}

// Finally, after creating the VehicleNewSuperX01Factory and VehicleNewSuperX02Factory factory classes, you can start producing cars.

const vehicleNewSuperX01Factory: VehicleNewSuperX01Factory = new VehicleNewSuperX01Factory();
const vehicleNewSuperX02Factory: VehicleNewSuperX02Factory = new VehicleNewSuperX02Factory();

const vehicleNewSuperX01 = vehicleNewSuperX01Factory.produceVehicle();
const vehicleNewSuperX02 = vehicleNewSuperX02Factory.produceVehicle();

vehicleNewSuperX01.run();
vehicleNewSuperX02.run();
