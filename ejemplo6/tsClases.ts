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
  const OriginalConstrucutor = target;

  function modifiedConstructor(...args: any[]) {
    const instance = new OriginalConstrucutor(...args);

    Object.keys(instance).forEach((key) => {
      if (typeof instance[key] === "string") {
        instance[key] = instance[key].toUpperCase();
      }
    });

    return instance;
  }

  modifiedConstructor.prototype = OriginalConstrucutor.prototype;
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
    console.info(`Calling method: ${_propertyKey}`);
    const result = originalMethod.call(this, ...args);
    console.info(`Result: ${result}`);
    console.info(`End of method: ${_propertyKey}`);
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
    console.debug(`Name: ${this.namePerson}.`);
    return this.namePerson;
  }
}

const result = new PersonDecoratorMethod("Juan");
result.getName();
console.debug(result);