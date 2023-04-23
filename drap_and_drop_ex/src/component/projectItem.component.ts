import { autoBind } from "../decorator/autobind.decorator.js";
import { Draggable } from "../interfaces/dargDrog.Interfaces.js";
import { Project } from "../model/projectModel.model.js";
import { Component } from "./base.component.js";

export class ProjectItem
  extends Component<HTMLUListElement, HTMLElement>
  implements Draggable
{
  private project: Project;

  get persons() {
    return this.project.people === 1
      ? `1 person`
      : `${this.project.people} persons`;
  }

  constructor(hostId: string, projectIn: Project) {
    super("single-project", hostId, false, projectIn.id);
    this.project = projectIn;

    this.configure();
    this.renderContent();
  }

  @autoBind
  public dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autoBind
  public dragEndHandler(_event: DragEvent): void {
    console.log("Drag End Handler");
  }

  public configure(): void {
    //to work
    this.elementAny.addEventListener("dragstart", this.dragStartHandler);
    this.elementAny.addEventListener("dragend", this.dragEndHandler);
  }

  public renderContent(): void {
    this.elementAny.querySelector("h2")!.textContent = this.project.title;
    this.elementAny.querySelector(
      "h3"
    )!.textContent = `${this.persons} assigned`;
    this.elementAny.querySelector("p")!.textContent = this.project.description;
  }
}
