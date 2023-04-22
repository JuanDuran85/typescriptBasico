/// <reference path="./model/projectModel.model.ts" />
/// <reference path="./interfaces/dargDrog.Interfaces.ts" />
/// <reference path="./interfaces/validationTypes.interfaces.ts" />
/// <reference path="./state/project.state.ts" />
/// <reference path="./util/validator.util.ts" />
/// <reference path="./decorator/autobind.decorator.ts" />
/// <reference path="./component/projectList.component.ts" />
/// <reference path="./component/projectInput.component.ts" />
/// <reference path="./component/base.component.ts" />
/// <reference path="./component/projectInput.component.ts" />

namespace App {
  const projectRenderForm: ProjectInput = new ProjectInput();
  console.log(projectRenderForm);
  const activeProjectRenderList = new ProjectList("active");
  console.log(activeProjectRenderList);
  const finishedProjectRenderList = new ProjectList("finished");
  console.log(finishedProjectRenderList);
}
