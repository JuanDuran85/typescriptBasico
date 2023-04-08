/**
 * Project State Class
 */

class ProjectState {
  private projects: unknown[] = [];
  private static instance: ProjectState;
  private listeners: any[] = [];
  
  private constructor() {}

  public static getInstance(): ProjectState {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  public addListener(listenerInFn: Function): void {
    this.listeners.push(listenerInFn);
  }
  
  public addProject(
    title: string,
    description: string,
    numberOfPeople: number
  ): void {
    const newProjectIn = {
      id: crypto.randomUUID().toString(),
      title,
      description,
      numberOfPeople,
    };
    this.projects.push(newProjectIn);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState: ProjectState = ProjectState.getInstance();
console.log(projectState);

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
  const { value, typeRef, required, minLength, maxLength, min, max } =
    dataOnValidation;
  let isValid: boolean = true;
  if (required) {
    isValid = isValid && value.toString().trim().length !== 0;
  }

  if (typeRef) {
    isValid = isValid && typeof value === typeRef;
  }

  if (minLength != null && typeof value !== "string") {
    isValid = isValid && value.toString().length >= minLength;
  }

  if (maxLength != null && typeof value !== "string") {
    isValid = isValid && value.toString().length <= maxLength;
  }

  if (min != null && typeof value === "number") {
    isValid = isValid && value >= min;
  }

  if (max != null && typeof value === "number") {
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
 * Project List Class
 */

class ProjectList {
  public templateElement: HTMLTemplateElement;
  public hostElement: HTMLDivElement;
  public elementSection: HTMLElement;
  public assignmentProjects: any[];

  constructor(private type: "active" | "finished") {
    this.templateElement = document.getElementById(
      "project-list"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;
    this.assignmentProjects = [];

    const importedNodeHtml: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.elementSection = importedNodeHtml.firstElementChild as HTMLElement;
    this.elementSection.id = `${this.type}-projects`;

      projectState.addListener((project: any[]) =>{
        this.assignmentProjects = project;
        this.renderProjects();
      });

    this.attach();
    this.renderContent();
  }

  private renderProjects(){
    const listElement = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;
    for (const projectItem of this.assignmentProjects) {
      const listItem: HTMLLIElement = document.createElement('li');
      listItem.textContent = projectItem.title;
      listElement.appendChild(listItem);
    }
  }

  private attach(): void {
    this.hostElement.insertAdjacentElement("beforeend", this.elementSection);
  }

  private renderContent(): void {
    const listId: string = `${this.type}-project-list`;
    this.elementSection.querySelector("ul")!.id = listId;
    this.elementSection.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }
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
      max: 5,
    };

    if (
      !validateInput(titleToValidate) ||
      !validateInput(descriptionToValidate) ||
      !validateInput(peopleToValidate)
    ) {
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
    if (!Array.isArray(userInputs)) {
      return;
    }
    const [title, description, people] = userInputs;
    projectState.addProject(title, description, people);
    this.clearInputs();
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
const activeProjectRenderList = new ProjectList("active");
console.log(activeProjectRenderList);
const finishedProjectRenderList = new ProjectList("finished");
console.log(finishedProjectRenderList);
