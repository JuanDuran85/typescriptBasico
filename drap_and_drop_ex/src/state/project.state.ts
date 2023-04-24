import { ListenersType } from "../interfaces/validationTypes.interfaces";
import { Project, StatusEnum } from "../model/projectModel.model";

class State<T> {
  protected listeners: ListenersType<T>[] = [];

  public addListener(listenerInFn: ListenersType<T>): void {
    this.listeners.push(listenerInFn);
  }
}

export class ProjectState extends State<Project> {
  private projects: Project[] = [];
  private static instance: ProjectState;
  //private crypto: Crypto = new Crypto();
  private readonly uuid = Math.floor(Math.random() * 46);

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
      // @ts-ignore
      this.uuid,
      title,
      description,
      numberOfPeople,
      StatusEnum.active
    );

    this.projects.push(newProjectIn);
    this.updateListeners();
  }

  public moveToFinishedProject(projectId: string, newStatus: StatusEnum) {
    const getProjectById: Project | undefined = this.projects.find(
      (value: Project) => value.id === projectId
    );
    if (getProjectById && getProjectById.projectStatus !== newStatus) {
      getProjectById.projectStatus = newStatus;
      this.updateListeners();
    }
  }

  public updateListeners(): void {
    for (const listenerFn of this.listeners) {
      listenerFn(this.projects.slice());
    }
  }
}

export const projectState: ProjectState = ProjectState.getInstance();
console.log(projectState);
