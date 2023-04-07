/**
 * Interfaces and types
 */

interface ValidationTypes {
  value: string | number;
  typeRef?: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  min?: number;
  max?: number;
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/**
 * Inputs Validation Function
 */

function validateInput(dataOnValidation: ValidationTypes): boolean {
  const { value, typeRef, required, minLength, maxLength, min, max } = dataOnValidation;
  let isValid: boolean = true;
  if (required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  if (typeRef) {
    isValid =
      isValid && typeof value === typeRef;
  }

  if (
    minLength != null &&
    typeof value !== "string"
  ) {
    isValid =
      isValid &&
      value.toString().length >= minLength;
  }

  if (
    maxLength != null &&
    typeof value !== "string"
  ) {
    isValid =
      isValid &&
      value.toString().length <= maxLength;
  }

  if (
    min != null &&
    typeof value === "number"
  ) {
    isValid = isValid && value >= min;
  }

  if (
    max != null &&
    typeof value === "number"
  ) {
    isValid = isValid && value <= max;
  }

  return isValid;
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/**
 * Auto Bind decorator
 */
function autoBind(
  _target: unknown,
  _methodName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  const adjDescritor: PropertyDescriptor = {
    configurable: true,
    get() {
      return originalMethod.bind(this);
    },
  };
  return adjDescritor;
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
/**
 * Project Input Class (Principal)
 */
class ProjectInput {
  public templateElement: HTMLTemplateElement;
  public hostElement: HTMLDivElement;
  public elementForm: HTMLFormElement;
  public titleInputElement: HTMLInputElement;
  public descriptionInputElement: HTMLInputElement;
  public peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNodeHtml: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.elementForm = importedNodeHtml.firstElementChild as HTMLFormElement;
    this.elementForm.id = "user-input";

    this.titleInputElement = this.elementForm.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.elementForm.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.elementForm.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configurate();
    this.attach();
  }

  private getAllData(): [string, string, number] | void {
    const titleInputValue: string = this.titleInputElement.value;
    const descriptionInputValue: string = this.descriptionInputElement.value;
    const peopleInputValue: string = this.peopleInputElement.value;

    const titleToValidate: ValidationTypes = {
      value: titleInputValue,
      typeRef: "string",
      required: true,
      minLength: 5,
    };
    const descriptionToValidate: ValidationTypes = {
      value: descriptionInputValue,
      typeRef: "string",
      required: true,
      minLength: 5,
    };
    const peopleToValidate: ValidationTypes = {
      value: Number(peopleInputValue),
      typeRef: "number",
      required: true,
      min: 1,
      max: 5
    };

    if (!validateInput(titleToValidate) || !validateInput(descriptionToValidate) || !validateInput(peopleToValidate)) {
      alert("Error... Try again!!!");
    } else {
      return [titleInputValue, descriptionInputValue, Number(peopleInputValue)];
    }
  }

  private clearInputs(): void {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autoBind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInputs: void | [string, string, number] = this.getAllData();
    if (Array.isArray(userInputs)) {
      const [title, description, people] = userInputs;
      console.log(title, description, people);
      this.clearInputs();
    }
  }

  private configurate() {
    this.elementForm.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.elementForm);
  }
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

const projectRenderForm: ProjectInput = new ProjectInput();
console.log(projectRenderForm);
