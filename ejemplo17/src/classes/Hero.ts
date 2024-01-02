import powers from '../data/power';

export class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {
      this.age = age;
      this.name = name;
      this.powerId = powerId;
  }

  get power(): string{
    return powers.find(power => power.id === this.powerId)?.desc ?? "not description";
  }
}