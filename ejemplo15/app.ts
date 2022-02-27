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
  console.log(mutan.mutanPower(10));


  /* ------------------------------------------------------------------------------- */

  interface AddTwoNumbers {
      (a: number, b: number): number;
  }

  const addTwoNumbers: AddTwoNumbers = (a: number, b: number) => a + b;

  console.log(addTwoNumbers(1,2));

})();
