import { ProjectInput } from "./component/projectInput.component.js";
import { ProjectList } from "./component/projectList.component.js";


const projectRenderForm: ProjectInput = new ProjectInput();
const activeProjectRenderList = new ProjectList("active");
const finishedProjectRenderList = new ProjectList("finished");

console.log(projectRenderForm);
console.log(activeProjectRenderList);
console.log(finishedProjectRenderList);
