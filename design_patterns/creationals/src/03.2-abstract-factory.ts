import { COLORS } from './helpers/colors.ts';

interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

class ElectricCar implements Vehicle {
  public assemble(): void {
    console.log("%cAssembling an electric car...", COLORS.green);
  }
}

class GasCar implements Vehicle {
  public assemble(): void {
    console.log("%cAssembling a gas car...", COLORS.pink);
  }
}

class ElectricEngine implements Engine {
  public start(): void {
    console.log("%cStarting an electric engine...", COLORS.green);
  }
}

class GasEngine implements Engine {
  public start(): void {
    console.log("%cStarting a gas engine...", COLORS.pink);
  }
}

abstract class VehicleFactory {
  public abstract createVehicle(): Vehicle;
  public abstract createEngine(): Engine;
}

class ElectricVehicleFactory extends VehicleFactory {
  public override createVehicle(): Vehicle {
    return new ElectricCar();
  }
  public override createEngine(): Engine {
    return new ElectricEngine();
  }
}

class GasVehicleFactory extends VehicleFactory {
  public override createVehicle(): Vehicle {
    return new GasCar();
  }
  public override createEngine(): Engine {
    return new GasEngine();
  }

}

function main(factory: VehicleFactory) {
  const vehicle: Vehicle = factory.createVehicle();
  const engine: Engine = factory.createEngine();

  vehicle.assemble();
  engine.start();
}

console.log('Creating electric vehicle:');
main(new ElectricVehicleFactory());

console.log('\nCreating gas vehicle:');
main(new GasVehicleFactory());
