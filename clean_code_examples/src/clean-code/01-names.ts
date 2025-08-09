(() => {
  const fileToEvaluate = [
    { id: 1, flagToEvaluate: false },
    { id: 2, flagToEvaluate: false },
    { id: 3, flagToEvaluate: true },
    { id: 4, flagToEvaluate: false },
    { id: 5, flagToEvaluate: false },
    { id: 7, flagToEvaluate: true },
  ];

  const filesToDelete: boolean[] = fileToEvaluate.map(
    (oneFile) => oneFile.flagToEvaluate
  );

  console.debug("Files to delete:", filesToDelete);

  // Wrong
  class AbstractUser {}
  class UserMixin {}
  class UserImplementation {}
  interface IUser {}

  // better
  class User {}
  interface User {}

  const actualDay = new Date();
  console.debug("Actual day:", actualDay);
  const totalDaysRunning: number = 23;
  console.debug("Total days running:", totalDaysRunning);
  const numberOfFileInDirectory = 33;
  console.debug("Number of files in directory:", numberOfFileInDirectory);
  const firstName = "Fernando";
  console.debug("First name:", firstName);
  const lastName = "Herrera";
  console.debug("Last name: ", lastName);
  const daySinceModification = 12;
  console.debug("Days since last modification:", daySinceModification);
  const maxClassesPerStudent = 6;
  console.debug("Max classes per student:", maxClassesPerStudent);
})();
