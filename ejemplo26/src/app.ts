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
    if (!element) {
      return;
    }
    element.innerHTML = template;
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
function LogPropertyClasss(targetProperty: any, propertyName: string | Symbol) {
  console.log("Property Class Decorator...");
  console.log(targetProperty);
  console.log(propertyName);
}

// adding decorator to an Accesor
function LogAccesorClass(
  target: any,
  nameAccesor: string,
  descriptor: PropertyDescriptor
) {
  console.log("Accesor Class Decorator...");
  console.log(target);
  console.log(nameAccesor);
  console.log(descriptor);
}

// adding decorator to a Method
function LogMethodClasss(
  target: any,
  nameMethod: string,
  descriptor: PropertyDescriptor
) {
  console.log("Method Class Decorator...");
  console.log(target);
  console.log(nameMethod);
  console.log(descriptor);
}

function LogParameterMethodClass(
  target: any,
  nameMethod: string,
  positionArgument: number
) {
  console.log("Parametor Class Decorator...");
  console.log(target);
  console.log(nameMethod);
  console.log(positionArgument);
}

class Product {
  @LogPropertyClasss
  public title: string;

  constructor(public titleIn: string, private _price: number) {
    this.title = titleIn;
  }

  @LogAccesorClass
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    }

    throw new Error("The price must be grader than 0");
  }

  @LogMethodClasss
  getPriceWithTax(@LogParameterMethodClass tax: number) {
    return this._price * (1 + tax);
  }
}

//---------------------------------------------
// returning values with decorator
//---------------------------------------------

// adding a decorator with template and returning some value

function DecoratorWithTemplateReturValue(template: string, hookId: string) {
  console.log("---- DecoratorWithTemplateReturValue ----");
  return <T extends { new (...args: any[]): { nameUser: string } }>(
    originalConstruct: T
  ) =>
    class extends originalConstruct {
      //adding new functionality
      constructor(..._: any[]) {
        super();
        console.log("---- Rendering tamplate ----");
        const elmentOne: HTMLElement | null = document.getElementById(hookId);
        if (!elmentOne) return;
        elmentOne.innerHTML = template;
        const newElement: HTMLHeadingElement = document.createElement("h3");
        newElement.innerHTML = this.nameUser;
        document.body.appendChild(newElement);
      }
    };
}

@DecoratorWithTemplateReturValue(
  "<p>Nuevo mensaje desde el Decorador</p>",
  "decorator"
)
class NewPersonClass {
  public nameUser: string = "JD";

  constructor() {
    console.log("Inside NewPersonClass");
  }
}

const person1: NewPersonClass = new NewPersonClass();
console.log(person1);

//---------------------------------------------
// crearing a bind without decorator with default JS
//---------------------------------------------
class PrinterWithOutDecorator {
  public message: string = "This work!!";

  public showMessage() {
    console.log(this.message);
  }
}

const print1: PrinterWithOutDecorator = new PrinterWithOutDecorator();

const button: HTMLButtonElement | null = document.querySelector("button");
button?.addEventListener("click", print1.showMessage.bind(print1));

//---------------------------------------------
// crearing a autobind with decorator
//---------------------------------------------

function AutoBindDecorator(
  _target: any,
  _methodName: string | Symbol | number,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  return {
    enumerable: false,
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
}

class PrinterDecorator {
  public message: string = "This work again!!";

  @AutoBindDecorator
  public showMessage(): void {
    console.log(this.message);
  }
}

const print2: PrinterDecorator = new PrinterDecorator();

button?.addEventListener("click", print2.showMessage);

//---------------------------------------------
// validation with decorator
//---------------------------------------------

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[] //['requird', 'positive', ...]
  };
}

interface ObjectValidConfig {
  [validatableProp: string]: string[];
};

const registeredValidators: ValidatorConfig = {};

function RequiredValue(target: any, propertyName: string): void {
  // we dont get de descriptor for properties
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]:[...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'required']
  }
}

function PositiveNumber(target: any, propertyName: string): void {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propertyName]:[...(registeredValidators[target.constructor.name]?.[propertyName] ?? []), 'positive']
  }
}

function validateProperties(objIn: any): boolean {
  const objValidatorConfig: ObjectValidConfig | undefined = registeredValidators[objIn.constructor.name];
  if (!objValidatorConfig) return true;
  let isValidFinal: boolean = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]!) {
      switch (validator) {
        case 'required':
          isValidFinal = isValidFinal && !!objIn[prop];
          break;
        case 'positive':
          isValidFinal = isValidFinal && objIn[prop] > 0;
          break;
        default:
          return false;
      }
    }
  }
  return isValidFinal;
}
class Course {
  @RequiredValue
  public title: string;
  @PositiveNumber 
  public price: number
  constructor(titleIn: string, priceIn: number) {
    this.title = titleIn;
    this.price = priceIn;
  }
}

const getForm: HTMLFormElement | null = document.querySelector("form");
getForm?.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const titleElement = document.getElementById('title') as HTMLInputElement;
  const priceElement = document.getElementById('price') as HTMLInputElement;

  const title: string = titleElement.value;
  const price: number = +priceElement.value;

  const createdCourse: Course = new Course(title, price);
  if (!validateProperties(createdCourse)){
    console.error("Invalid input. Please try again");
    return; 
  }
  console.log(createdCourse);
});

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
