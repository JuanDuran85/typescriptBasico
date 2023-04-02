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

  private submitHandler(event: Event) {
    event.preventDefault();
    console.log(this.titleInputElement.value);
  }

  private configurate() {
    this.elementForm.addEventListener("submit", this.submitHandler.bind(this));
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.elementForm);
  }
}

const projectRenderForm = new ProjectInput();
console.log(projectRenderForm);
