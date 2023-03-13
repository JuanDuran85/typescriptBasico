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
    if (hookId) {
      element!.innerHTML = template;
      const newElement = document.createElement("h3");
      newElement.innerHTML = person.name;
      document.body.appendChild(newElement);
    }
  };
}

@DecoratorWithTemplate("<p>Nuevo mensaje desde el Decorador</p>", "decorator")
class PersonForDecorator {
  public name: string = "Juan";

  constructor() {
    console.log("Inside PersonForDecorator");
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
