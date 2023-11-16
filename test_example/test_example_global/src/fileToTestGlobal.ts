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
export class ExampleClassToDecored {
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

const result: PersonDecoratorMethod = new PersonDecoratorMethod("Juan");
result.getName();
console.debug(result);