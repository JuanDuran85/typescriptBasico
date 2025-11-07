import { COLORS } from "./helpers/colors.ts";

interface Visitor {
  visitCar(car: Car): void;
  visitMotorcycle(motorcycle: Motorcycle): void;
  visitTruck(truck: Truck): void;
}

interface Vehicle {
  accept(visitor: Visitor): void;
}

class Car implements Vehicle {
  private year: number;
  private kilometers: number;

  constructor(year: number, kilometers: number) {
    this.year = year;
    this.kilometers = kilometers;
  }

  public getYear(): number {
    return this.year;
  }

  public getKilometers(): number {
    return this.kilometers;
  }

  public accept(visitor: Visitor): void {
    visitor.visitCar(this);
  }
}

class Motorcycle implements Vehicle {
  private year: number;
  private kilometers: number;

  constructor(year: number, kilometers: number) {
    this.year = year;
    this.kilometers = kilometers;
  }

  public getYear(): number {
    return this.year;
  }

  public getKilometers(): number {
    return this.kilometers;
  }

  accept(visitor: Visitor): void {
    visitor.visitMotorcycle(this);
  }
}

class Truck implements Vehicle {
  private year: number;
  private kilometers: number;
  private loadCapacity: number;

  constructor(year: number, kilometers: number, loadCapacity: number) {
    this.year = year;
    this.kilometers = kilometers;
    this.loadCapacity = loadCapacity;
  }

  public getYear(): number {
    return this.year;
  }

  public getKilometers(): number {
    return this.kilometers;
  }

  public getLoadCapacity(): number {
    return this.loadCapacity;
  }

  public accept(visitor: Visitor): void {
    visitor.visitTruck(this);
  }
}

class MaintenanceCostVisitor implements Visitor {
  private cost: number = 0;
  public visitCar(car: Car): void {
    this.cost = car.getKilometers() * 0.1 + (2024 - car.getYear()) * 50;

    console.debug(
      `Total cost of maintenance for the car: $${this.cost.toFixed(2)}`
    );
  }

  public visitMotorcycle(motorcycle: Motorcycle): void {
    this.cost =
      motorcycle.getKilometers() * 0.05 + (2024 - motorcycle.getYear()) * 30;

    console.debug(
      `Total cost of maintenance for the motorcycle: $${this.cost.toFixed(2)}`
    );
  }

  public visitTruck(truck: Truck): void {
    this.cost =
      truck.getKilometers() * 0.15 +
      truck.getLoadCapacity() * 20 +
      (2024 - truck.getYear()) * 100;

    console.debug(
      `Total cost of maintenance for the truck: $${this.cost.toFixed(2)}`
    );
  }
}

class EmissionCheckVisitor implements Visitor {
  private passes: boolean = false;
  public visitCar(car: Car): void {
    this.passes = car.getYear() > 2000 && car.getKilometers() < 200_000;
    console.debug(`Emission check for the car: ${this.passes ? "Sí" : "No"}`);
  }

  public visitMotorcycle(motorcycle: Motorcycle): void {
    this.passes =
      motorcycle.getYear() > 2005 && motorcycle.getKilometers() < 100_000;
    console.debug(
      `Emission check for the motorcycle: ${this.passes ? "Sí" : "No"}`
    );
  }

  public visitTruck(truck: Truck): void {
    this.passes = truck.getYear() > 2010 && truck.getKilometers() < 300_000;
    console.debug(`Emission check for the truck: ${this.passes ? "Sí" : "No"}`);
  }
}

function main(): void {
  const vehicles: Vehicle[] = [
    new Car(2018, 50_000),
    new Motorcycle(2015, 30_000),
    new Truck(2012, 250_000, 20),
  ];

  console.debug("%c\n Maintenance check:", COLORS.green);
  const maintenanceVisitor = new MaintenanceCostVisitor();
  vehicles.forEach((vehicle) => vehicle.accept(maintenanceVisitor));

  console.debug("%c\n Verifying emissions:", COLORS.green);
  const emissionVisitor = new EmissionCheckVisitor();
  vehicles.forEach((vehicle) => vehicle.accept(emissionVisitor));
}

main();
