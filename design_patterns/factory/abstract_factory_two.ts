/**
 * ! Abstract Factory
 */

/* 
    The Factory pattern is a design pattern that lets you create objects without specifying the exact class of the object that will be created. Now, the abstract factory pattern provides a way to create families of related objects without imposing their concrete classes, by encapsulating a group of individual factories that have a common theme without specifying their concrete classes.
*/

abstract class VehicleAF {
    abstract getType(): string;
}

class CarAF extends VehicleAF {
    public getType(): string {
        return 'Car';
    }
}

class TruckAF extends VehicleAF {
    public getType(): string {
        return 'Truck';
    }
}

class VehicleFactoryAF {
    public createVehicle(type: string): VehicleAF {
       switch (type) {
        case 'Car':
            return new CarAF();
        case 'Truck':
            return new TruckAF(); 
        default:
            throw new Error(`Invalid vehicle type - The "${type}" is not valid.`);
       } 
    }
}

const factoryVehicleAF = new VehicleFactoryAF();
const car = factoryVehicleAF.createVehicle('Car');
console.debug({ car });
const truck = factoryVehicleAF.createVehicle('Truck');
console.debug({ truck });