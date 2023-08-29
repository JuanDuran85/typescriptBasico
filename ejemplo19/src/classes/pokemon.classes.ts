function printToConsole(constructor: Function) {
  console.debug(constructor);
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
  return () => console.debug("No print");
};

/* --------------------- factory decorator --------------------- */
function ValidateNumberOfPokemonId() {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalFunction = descriptor.value;

    descriptor.value = (id:number) => {
      if(id < 1 || id > 800) return console.error("Id no valido");
      return originalFunction(id);
    }
  }
}
//------------------------------------------------------------------
// cuando se aplica el decorador a una propiedad, no se recibe el descriptor
function readOnly(isWritable: boolean = true): Function {
  return function (target: any, propertyKey: string) {
      const descriptor: PropertyDescriptor = {
        get(){
          return 'Juan'
        },
        set(this,val){
          Object.defineProperty(this,propertyKey,{
            value: val,
            writable: !isWritable,
            enumerable: false,

          })
        }
      }
      return descriptor;
  }
}

//------------------------------------------------------------------

@blockPrototype
@prinrToConsoleConditional(false)
export class Pokemon2 {

  @readOnly(true)
  public publicApi = "https://pokeapi.co";

  constructor(public name: string) {}

  @ValidateNumberOfPokemonId()
  savaPokemonToDb(id: number){
    console.debug(`Saving pokemon with id: ${id}`);
  }
}




