function printToConsole(constructor: Function) {
  console.log(constructor);
}

@printToConsole
export class Pokemon {
  public publicApi = "https://pokeapi.co";
  constructor(public name: string) {}
}

const blockPrototype = function(constructor:Function){
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

const prinrToConsoleConditional = (print: boolean = false): Function => {
  if (print) return printToConsole;
  return () => console.log("No print");
};

@blockPrototype
@prinrToConsoleConditional(true)
export class Pokemon2 {
  public publicApi = "https://pokeapi.co";
  constructor(public name: string) {}
}




