/* 

A factory is a method or function that creates an object, or a set of objects, without exposing the creation logic to the client.

The factory method pattern, also known as the factory pattern, is also called the polymorphic factory pattern, which belongs to the creational pattern.

The Factory pattern is a design pattern lets you create objects without specifying the exact class of the object that will be created.

In the factory method pattern, the factory parent class is responsible for defining the public interface for creating product objects, while the factory subclass is responsible for generating specific product objects. The purpose of this is to delay the instantiation of the product class to the factory subclass. That is, through the factory subclass to determine which specific product class should be instantiated.

The factory method pattern includes the following roles:

    Product: abstract product
    Concrete Product: concrete product
    Factory: abstract factory
    ConcreteFactory: concrete factory

*/

class Vehicle{};
class Car{};
class Truck{};

class VehicleFactory {

    private vehicleType = {
        'car': () => new Car(),
        'truck': () => new Truck()
    }

    public createVehicle(typeVehicle: string): Vehicle {
        return this.vehicleType[typeVehicle] || new Error('No existe')
    }
}

const factoryCreation = new VehicleFactory();
const carOne = factoryCreation.createVehicle('car');
const truckOne = factoryCreation.createVehicle('truck');
console.log(carOne);
console.log(truckOne);
















