import { autoBind } from "../decorator";
import { DragTarget } from "../interfaces/dargDrog.Interfaces.js";
import { Project, StatusEnum } from "../model/projectModel.model.js";
import { Component } from "./base.component.js";
import { ProjectItem } from "./projectItem.component.js";
import { projectState } from '../state/project.state.js';

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget
{
  public assignmentProjects: Project[];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.assignmentProjects = [];
    this.configure();
    this.renderContent();
  }

  @autoBind
  public dragOverHandler(event: DragEvent): void {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listElement: HTMLUListElement =
        this.elementAny.querySelector("ul")!;
      listElement.classList.add("droppable");
    }
  }

  @autoBind
  public dropHandler(event: DragEvent): void {
    const projectIdDragElement: string =
      event.dataTransfer!.getData("text/plain");
    projectState.moveToFinishedProject(
      projectIdDragElement,
      this.type === "active" ? StatusEnum.active : StatusEnum.finished
    );
  }

  @autoBind
  public dragLeaveHandler(_event: DragEvent): void {
    const listElement: HTMLUListElement = this.elementAny.querySelector("ul")!;
    listElement.classList.remove("droppable");
  }

  public configure(): void {
    this.elementAny.addEventListener("dragover", this.dragOverHandler);
    this.elementAny.addEventListener("dragleave", this.dragLeaveHandler);
    this.elementAny.addEventListener("drop", this.dropHandler);

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
      const itemProject: ProjectItem = new ProjectItem(
        this.elementAny.querySelector("ul")!.id,
        projectItem
      );
      console.log(itemProject);
    }
  }
}
