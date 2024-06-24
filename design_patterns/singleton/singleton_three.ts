class SingletonThree {
  private static instance: SingletonThree;
  public random: number;

  private constructor() {
    this.random = Math.random();
  }

  public static getInstance(): SingletonThree {
    if (!this.instance) this.instance = new SingletonThree();
    return this.instance;
  }
}

const singletonClass: SingletonThree = SingletonThree.getInstance();
const singletonClass2: SingletonThree = SingletonThree.getInstance();
console.debug(singletonClass);
console.debug(singletonClass2);