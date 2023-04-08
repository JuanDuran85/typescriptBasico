/**
 * Component Base Class
 */
abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  public templateElement: HTMLTemplateElement;
  public hostElement: T;
  public elementAny: U;

  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;

    const importedNodeHtml: DocumentFragment = document.importNode(
      this.templateElement.content,
      true
    );
    this.elementAny = importedNodeHtml.firstElementChild as U;
    if (newElementId) this.elementAny.id = newElementId;
    this.attach(insertAtStart);
  }

  private attach(insertAtStartIn: boolean): void {
    this.hostElement.insertAdjacentElement(
      insertAtStartIn ? "afterbegin" : "beforeend",
      this.elementAny
    );
  }

  public abstract configure(): void;
  public abstract renderContent(): void;
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
/**
 * Enums
 */

enum StatusEnum {
  active,
  finished,
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/**
 * Project class like type
 */
class Project {
  constructor(
    public id: string,
    public title: string,
    public description: string,
    public people: number,
    public projectStatus: StatusEnum
  ) {}
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

/**
 * Project State Class
 */

class State<T> {
  protected listeners: ListenersType<T>[] = [];

  public addListener(listenerInFn: ListenersType<T>): void {
    this.listeners.push(listenerInFn);
  }
}

class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;

  private constructor() {
    super();
  }

  public static getInstance(): ProjectState {
    if (this.instance) return this.instance;
    this.instance = new ProjectState();
    return this.instance;
  }

  public addProject(
    title: string,
    description: string,
    numberOfPeople: number
  ): void {
    const newProjectIn: Project = new Project(
      crypto.randomUUID().toString(),
      title,
      description,
      numberOfPeople,
      StatusEnum.active
    );

    this.projects.push(newProjectIn);
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

const projectState: ProjectState = ProjectState.getInstance();
console.log(projectState);

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

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

type ListenersType<T> = (items: T[]) => void;

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

class ProjectList extends Component<HTMLDivElement, HTMLElement> {
  public assignmentProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignmentProjects = [];
    this.configure();
    this.renderContent();
  }

  public configure(): void {
    projectState.addListener((project: Project[]) => {
      const relevantProjects: Project[] = project.filter((projectItem) => {
        if (this.type === "active")
          return projectItem.projectStatus === StatusEnum.active;
        return projectItem.projectStatus === StatusEnum.finished;
      });
      this.assignmentProjects = relevantProjects;
      this.renderProjects();
    });
  }

  public renderContent(): void {
    const listId: string = `${this.type}-project-list`;
    this.elementAny.querySelector("ul")!.id = listId;
    this.elementAny.querySelector("h2")!.textContent =
      this.type.toUpperCase() + " PROJECTS";
  }

  private renderProjects() {
    const listElement = document.getElementById(
      `${this.type}-project-list`
    )! as HTMLUListElement;
    listElement.innerHTML = "";
    for (const projectItem of this.assignmentProjects) {
      const listItem: HTMLLIElement = document.createElement("li");
      listItem.textContent = projectItem.title;
      listElement.appendChild(listItem);
    }
  }
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
/**
 * Project Input Class (Principal)
 */
class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  public titleInputElement: HTMLInputElement;
  public descriptionInputElement: HTMLInputElement;
  public peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.titleInputElement = this.elementAny.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.elementAny.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.elementAny.querySelector(
      "#people"
    ) as HTMLInputElement;
    this.configure();
  }

  public configure(): void {
    this.elementAny.addEventListener("submit", this.submitHandler);
  }

  public renderContent(): void {
    // void
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
}
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------

const projectRenderForm: ProjectInput = new ProjectInput();
console.log(projectRenderForm);
const activeProjectRenderList = new ProjectList("active");
console.log(activeProjectRenderList);
const finishedProjectRenderList = new ProjectList("finished");
console.log(finishedProjectRenderList);
