(() => {
  function isRedFruit(fruit: string): boolean {
    const redFruits: string[] = ["apple", "cherry", "plum"];
    return redFruits.includes(fruit);
  }

  interface FruitsColors {
    red: string[];
    yellow: string[];
    purple: string[];
  }

  type FruitsColorII = "red" | "yellow" | "purple";

  function getFruitsByColor(color: string): string[] {
    const fruitsColors: FruitsColors = {
      red: ["apple", "strawberry"],
      yellow: ["pineapple", "banana"],
      purple: ["blackberry", "grape"],
    };

    if (!Object.hasOwn(fruitsColors, color)) {
      throw new Error("The color is wrong");
    }

    return fruitsColors[color as keyof FruitsColors];
  }

  const isFirstStepWorking: boolean = true;
  const isSecondStepWorking: boolean = true;
  const isThirdStepWorking: boolean = true;
  const isFourthStepWorking: boolean = true;

  function workingSteps() {
    if (!isFirstStepWorking) return "First step broken.";
    if (!isSecondStepWorking) return "Second step broken.";
    if (!isThirdStepWorking) return "Third step broken.";
    if (!isFourthStepWorking) return "Fourth step broken.";

    return "Working properly!";
  }

  // isRedFruit
  console.log({ isRedFruit: isRedFruit("cherry"), fruit: "cherry" }); // true
  console.log({ isRedFruit: isRedFruit("pineapple"), fruit: "pineapple" }); // true

  //getFruitsByColor
  console.log({ redFruits: getFruitsByColor("red") }); // ['apple', 'fresa']
  console.log({ yellowFruits: getFruitsByColor("yellow") }); // ['pineapple', 'banana']
  console.log({ purpleFruits: getFruitsByColor("purple") }); // ['moras', 'uvas']
  //console.log({ pinkFruits: getFruitsByColor("pink") }); // Error: the color must be: red, yellow, purple

  // workingSteps
  console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados
})();
