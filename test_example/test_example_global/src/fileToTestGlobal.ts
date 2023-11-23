function sealed(target: Function): void{
  console.debug(`Target FD: ${target}`);
  Object.seal(target);
  Object.seal(target.prototype)
  console.debug(`Target FD - Two: ${target}`);
}

@sealed
export class ClassDecoratorExampleOne {
  type = "report";
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

const instanceClassDecoratorOne: ClassDecoratorExampleOne =
  new ClassDecoratorExampleOne("Title to Class Decorator");
console.debug(instanceClassDecoratorOne);
console.debug(instanceClassDecoratorOne.title);
console.debug(instanceClassDecoratorOne.type);
instanceClassDecoratorOne.title = "New Title to Class Decorator Two";
console.debug(instanceClassDecoratorOne.title);
