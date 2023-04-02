class ProjectInput {
  public templateElement: HTMLTemplateElement;
  public hostElement: HTMLDivElement;
  public elementForm: HTMLFormElement;

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
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.elementForm);
  }
}

const projectRenderForm = new ProjectInput();
console.log(projectRenderForm);
