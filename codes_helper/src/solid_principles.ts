/**
 * Solid Principles
 * - Single responsibility
 * - Open/closed
 * - Liskov substitution
 * - Interface segregation
 * - Dependency inversion
 */

// ! 1. Single Responsibility Principle (SRP)
/* 
    There should never be more than one reason for a class to change. Therefore, a class should have one purpose/responsibility and only one reason to change.
*/

class Book {
  public title: string;
  public price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}

//  Instead of having only one class, we have two classes, one for each purpose.

class Persistence {
  public saveToFile(book: Book) {
    // save to file
    return true;
  }
}

// ! 2. Open/Closed Principle (OCP)
/* 
    A class or Software entities should be open for extension but closed for modification. Instead of overriding your class, better extend it. It should be easy to extend the code with new features w/o touching the old code.
*/

interface ShapeOcp {
  calculateAreaOcp(): number;
}

class RectanguleOcp implements ShapeOcp {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateAreaOcp(): number {
    return this.width * this.height;
  }
}

class CircleOcp implements ShapeOcp {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  public calculateAreaOcp(): number {
    return Math.PI * this.radius ** 2;
  }
}

class AreaCalculator {
  public calculateAreaOcp(shapeOcp: ShapeOcp): number {
    return shapeOcp.calculateAreaOcp();
  }
}

const rectOne = new RectanguleOcp(10, 20);
const areaCalculator = new AreaCalculator();
console.debug(areaCalculator.calculateAreaOcp(rectOne));

// ! 3. Liskov Substitution Principle (LSP)

/* 
Functions that use pointers or references to base classes must be able to use objects of derived classes without knowing it. Lower classes that use pointers or references to upper classes must be able to use objects of derived classes without knowing it. These lower classes should extend the upper class, not change it.
*/

class RectangleLsp {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  public calculateArea(): number {
    return this.width * this.height;
  }

  public isSquare(): boolean {
    return this.width === this.height;
  }
}

// ! 4. Interface Segregation Principle (ISP)

/* 
Many client-specific interfaces are better than one general-purpose interface. This principle states that clients should not be forced to depend upon methods they do not use. Simply said, more interfaces are better than having too few
*/

// Don't do this
/* 
interface Character {
  shoot(): void;
  swim(): void;
  talk(): void;
  dance(): void;
}
*/

interface Talker {
  talk(): void;
}

interface Shooter {
  shoot(): void;
}

interface Swimmer {
  swim(): void;
}

interface Dancer {
  dance(): void;
}

class Troll implements Shooter, Dancer {
  public shoot(): void {
    console.debug("Troll is shooting");
  }

  public dance(): void {
    console.debug("Troll is dancing");
  }
}

// ! 5. Dependency Inversion Principle (DIP)

/*
Depend upon abstractions, [not] concretions. 
*/

interface Developer {
  develop(): void;
}

class FrontendDeveloper implements Developer {
  public develop(): void {
    this.writerHtmlCode();
  }

  private writerHtmlCode(): void {
    console.debug("writer html code");
  }
}

class backendDeveloper implements Developer {
  public develop(): void {
    this.writeTypeScriptCode();
  }

  private writeTypeScriptCode(): void {
    console.debug("writer typescript code");
  }
}

class Softwareproject {
  public developers: Developer[] = [];

  public crearteProject(): void {
    this.developers.forEach((developer) => developer.develop());
  }
}

const frontDev = new FrontendDeveloper();
const backDev = new backendDeveloper();
const project = new Softwareproject();
project.developers.push(frontDev, backDev);
project.crearteProject();
