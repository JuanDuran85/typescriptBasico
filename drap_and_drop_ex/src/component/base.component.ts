export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
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
