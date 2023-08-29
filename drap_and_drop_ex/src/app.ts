import { ProjectInput } from './component/projectInput.component';
import { ProjectList } from './component/projectList.component';

const projectRenderForm: ProjectInput = new ProjectInput();
const activeProjectRenderList = new ProjectList("active");
const finishedProjectRenderList = new ProjectList("finished");

console.debug(projectRenderForm);
console.debug(activeProjectRenderList);
console.debug(finishedProjectRenderList);
