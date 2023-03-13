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

// ---------------------------------------------------------------------------------
