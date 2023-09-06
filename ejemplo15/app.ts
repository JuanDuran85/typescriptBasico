(() => {
  interface Xmen {
    name: string;
    realName: string;
    mutanPower(id: number): string;
  }

  interface Human {
    age: number;
  }

  class Mutant implements Xmen, Human {
    constructor(
      public age: number,
      public name: string,
      public realName: string
    ) {
        this.age = age;
        this.name = name;
        this.realName = realName;
    }

    mutanPower(id: number): string {
      return `${this.name} has ${id} mutan power`;
    }
  }

  const mutan = new Mutant(45,"Logan","James");
  console.debug(mutan.mutanPower(10));


  /* ------------------------------------------------------------------------------- */

  type AddTwoNumbers = (a: number, b: number) => number;

  const addTwoNumbers: AddTwoNumbers = (a: number, b: number) => a + b;

  console.debug(addTwoNumbers(1,2));

})();
