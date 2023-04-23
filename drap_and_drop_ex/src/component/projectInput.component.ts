import { autoBind } from "../decorator/autobind.decorator.js";
import { ValidationTypes } from "../interfaces/validationTypes.interfaces.js";
import { projectState } from "../state/project.state.js";
import { validateInput } from "../util/validator.util.js";
import { Component } from "./base.component.js";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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
