// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
//   -----------------------   Working with Class Decorators   -----------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

/**
 * A Decorator is a special kind of declaration that can be attached to a class declaration, method, accessor, property, or parameter. Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.
 */

function LoggerDecorator(param: Function) {
  console.log("Inside Logger Decorator");
  console.log(param);
}

@LoggerDecorator
class Person {
  public name = "Juan";

  constructor() {
    console.log("Inside of constructor class");
    console.log("Creating Person object...");
  }
}

//----------------------------------
// creating a decorator factory
//----------------------------------

function LoggerDecoratorFactory(messageLog: string) {
  return (param: Function) => {
    console.log(messageLog);
    console.log(param);
  };
}

@LoggerDecoratorFactory("LOGGIN_PERSON")
class PersonClass {
  public name = "Juan";

  constructor() {
    console.log("Inside of constructor class");
    console.log("Creating Person object...");
  }
}

//---------------------------------------------
// creating a decorator factory with templates
//---------------------------------------------

function DecoratorWithTemplate(template: string, hookId: string) {
  return (construct: any) => {
    const person: PersonForDecorator = new construct();
    const element: HTMLElement | null = document.getElementById(hookId);
    if (!hookId) {
      return;
    }
    element!.innerHTML = template;
    const newElement = document.createElement("h3");
    newElement.innerHTML = person.name;
    document.body.appendChild(newElement);
  };
}

@DecoratorWithTemplate("<p>Nuevo mensaje desde el Decorador</p>", "decorator")
class PersonForDecorator {
  public name: string = "Juan";

  constructor() {
    console.log("Inside PersonForDecorator");
  }
}


//---------------------------------------------
// All places to add decorator
//---------------------------------------------

// adding decorator to a property
function LogPropertyClasss(targetProperty: any,  propertyName:  string |  Symbol) {
    console.log("Property Class Decorator...");
    console.log(targetProperty);
    console.log(propertyName);
}

// adding decorator to an Accesor
function LogAccesorClass(target: any, nameAccesor: string, descriptor: PropertyDescriptor) {
  console.log("Accesor Class Decorator...");
  console.log(target);
  console.log(nameAccesor);
  console.log(descriptor);
}

// adding decorator to a Method
function LogMethodClasss(target: any, nameMethod: string, descriptor: PropertyDescriptor) {
  console.log("Method Class Decorator...");
  console.log(target);
  console.log(nameMethod);
  console.log(descriptor);

}

function LogParameterMethodClass(target: any, nameMethod: string, positionArgument: number) {
  console.log("Parametor Class Decorator...");
  console.log(target);
  console.log(nameMethod);
  console.log(positionArgument);
}

class Product {
    @LogPropertyClasss
    public title: string;

    constructor(public titleIn: string, private _price: number){
        this.title = titleIn;
    }

    @LogAccesorClass
    set price(value: number){
        if (value > 0) {
            this._price = value;
        }

        throw new Error("The price must be grader than 0");
    }

    @LogMethodClasss
    getPriceWithTax(@LogParameterMethodClass tax: number){
        return this._price * (1 + tax);
    }
}





// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

/**
 * Class Decorator
 * Generating metadata using a class decorator: This time we are going to declare a class decorator that will add some metadata to a class when we applied to it:
 */

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

/**
 * Class Decorator
 * Generating metadata using a class decorator: This time we are going to declare a class decorator that will add some metadata to a class when we applied to it:
 */

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
