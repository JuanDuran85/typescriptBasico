/**
 * Decorators
 *
 * * A decorators in TypeScript are a special kind of feature that allows you to enhance or modify your code in a flexible way. They provide a way to attach additional functionality to classes, methods, properties, or parameters.
 *
 * Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration. "TypeScript docs"
 *
 * A Decorator Factory is simply a function that returns the expression that will be called by the decorator at runtime. "TypeScript docs"
 *
 * * A Decorator Factory is a function that returns another function, which acts as the actual decorator. It allows us to configure and customize the behavior of the decorator before it is applied to a target.
 *
 */

//------------------------------------------------------------------
/**
 * * Class decorators are a type of decorator that can be applied to classes.
 * - Allow you to modify or extend the behavior of a class or its constructor, and can even replace the entire class with a new one.
 * - They receive the class constructor as their target and can be used to add properties, methods, or modify metadata.
 * - Class decorators are executed at runtime when the class is defined. By having access to the class constructor, they enable behavior manipulation before any instances are created.
 *
 * @param target
 * @returns
 */

function decoratorClassFunction<T extends new (...args: any[]) => any>(
  target: T
): T {
  function modifiedConstructor(...args: any[]) {
    const instance = new target(...args);

    Object.keys(instance).forEach((key) => {
      if (typeof instance[key] === "string") {
        instance[key] = instance[key].toUpperCase();
      }
    });

    return instance;
  }

  modifiedConstructor.prototype = target.prototype;
  return modifiedConstructor as unknown as T;
}

@decoratorClassFunction
class ExampleClassToDecored {
  public constructor(private name: string, private nickName: string) {}

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public displayNickName() {
    console.debug(this.nickName);
    return this.nickName;
  }
}

const resultExample = new ExampleClassToDecored("Juan", "Juanito");
resultExample.displayNickName();
console.debug(resultExample.getName());

//---------------------------------------------
// The decorator class is a function and gets the constructor as a parameter,
function BaseEntity(functionIn: Function) {
  console.debug(`Function in: ${functionIn}`);
  functionIn.prototype.id = Math.floor(1000 * Math.random());
  functionIn.prototype.createdAt = new Date().toLocaleString("es-Es");
  console.debug(`Function out: ${functionIn}`);
}

// The decorator class is a function and gets the constructor as a parameter

@BaseEntity
class UserWithDecorator {
  public constructor(public name: string) {}
}

@BaseEntity
class CityWithDecorator {
  public constructor(public code: string) {}
}

const user = new UserWithDecorator("juan");
const city = new CityWithDecorator("madrid");
console.debug(user);
console.debug(city);
console.debug(user.name);
console.debug(city.code);

//------------------------------------------------------------------
/**
 * * Method Decorators: are a type of decorator that can be applied to class methods (both instance methods and static methods), allowing you to modify or extend the behavior of a specific method.

- They Have the ability to access and modify method arguments, return values, or even replace the method entirely.
- They are functions that receive three parameters: the target object (class prototype), the method name, and the property descriptor (an object that describes the attributes and behavior of a property).
- They are executed when the class is defined, allowing for modification of method behavior before any instances are created.
 */

function loggerMethodDecorator(
  _target: any,
  _propertyKey: any,
  descriptor: PropertyDescriptor
): PropertyDescriptor {
  const originalMethod = descriptor.value;

  function modifiedOrReplacedMethod(this: any, ...args: any[]): any {
    console.info(`Calling method in decorator: ${_propertyKey}`);
    const result = originalMethod.call(this, ...args);
    console.info(`Result in decorator: ${result}`);
    console.info(`End of method in decorator: ${_propertyKey}`);
    return result;
  }

  descriptor.value = modifiedOrReplacedMethod;
  return descriptor;
}

class PersonDecoratorMethod {
  public namePerson: string;

  public constructor(name: string) {
    this.namePerson = name;
  }

  @loggerMethodDecorator
  public getName(): string {
    console.debug(`Name in class method: ${this.namePerson}.`);
    return this.namePerson;
  }
}

const result: PersonDecoratorMethod = new PersonDecoratorMethod("Juan");
result.getName();
console.debug(result);

// ------------------------------------------------------------------

/**
 * Decorator composition: is the concept of applying multiple decorators to a target in a specific order to achieve a desired behavior or functionality. It allows you to combine and chain decorators to modify or extend a behavior.
 *
 * Multiple decorators can be applied to a declaration in TypeScript either on a single line or on multiple lines. The order of the decorators matters because each decorator builds upon the modifications made by the previous decorator.
 */

function firstDecorator() {
  console.debug("First decorator evaluated");
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.debug("First decorator called");
  };
}

function secondDecorator() {
  console.debug("Second decorator evaluated");
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    console.debug("Second decorator called");
  };
}

class ExampleMultipleDocorators {
  public name: string;

  public constructor(name: string) {
    this.name = name;
  }

  @firstDecorator()
  @secondDecorator()
  public getNameUser(): string {
    return this.name;
  }
}

const resultMultiple: ExampleMultipleDocorators = new ExampleMultipleDocorators(
  "Juan"
);
resultMultiple.getNameUser();

//-----------------------------------------------------------------

/**
 * Property Decorators: are a type of decorator that can be applied to class properties (both instance and static).
 */

function propertyDecoratorReadOnlyExample(target: any, propertyName: string) {
  console.debug({
    target,
    propertyName,
  });
  Object.defineProperty(target, propertyName, {
    writable: false,
  });
  Object.freeze(target);
  Object.freeze(propertyName);
}

class PropertyDecoratorExample {
  @propertyDecoratorReadOnlyExample
  public name: string;

  constructor(name: string) {
    console.debug(this.name);
    this.name = name;
  }
}

const instancePropertyDecorator: PropertyDecoratorExample =
  new PropertyDecoratorExample("Juan");
console.debug(instancePropertyDecorator.name);
instancePropertyDecorator.name = "Juanito";
console.debug(instancePropertyDecorator.name);
