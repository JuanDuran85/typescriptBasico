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
