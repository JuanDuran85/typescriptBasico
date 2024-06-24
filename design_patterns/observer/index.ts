/**
 *
 * Observer Pattern
 *
 */

interface ObserverInterface<T> {
  refresh(value: T): void;
}

interface SubjectInterface<T> {
  observers: ObserverInterface<T>[];
  subscribe(observer: ObserverInterface<T>): void;
  unsubscribe(observer: ObserverInterface<T>): void;
  notify(value: T): void;
}

class Subject<T> implements SubjectInterface<T> {
  public observers: ObserverInterface<T>[];

  public constructor() {
    this.observers = [];
  }

  public subscribe(observer: ObserverInterface<T>): void {
    this.observers.push(observer);
  }

  public unsubscribe(observer: ObserverInterface<T>): void {
    this.observers = this.observers.filter((result) => result !== observer);
  }

  public notify(value: T): void {
    this.observers.forEach((result) => result.refresh(value));
  }
}

class Observer<T> implements ObserverInterface<T> {
  private fn: (value: T) => void;
  public constructor(fn: (value: T) => void) {
    this.fn = fn;
  }
  public refresh(value: T): void {
    this.fn(value);
  }
}

const subjectNumber: Subject<number> = new Subject<number>();
const obs1: Observer<number> = new Observer<number>((val) => {
  console.debug(`Value Obs1: ${val}`);
});
const obs2: Observer<number> = new Observer<number>((val) => {
  console.debug(`Value Obs2: ${val}`);
});

subjectNumber.subscribe(obs1);
subjectNumber.subscribe(obs2);
subjectNumber.notify(53.61);
subjectNumber.notify(111.3333);

const subjectString: Subject<string> = new Subject<string>();
const obsStringOne: Observer<string> = new Observer<string>((val: string) =>
  console.debug(`Value string observer 1: ${val.toUpperCase()}`)
);
subjectString.subscribe(obsStringOne);
subjectString.notify("Observador string one");