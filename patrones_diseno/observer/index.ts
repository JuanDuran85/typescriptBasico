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
  observers: ObserverInterface<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: ObserverInterface<T>): void {
    this.observers.push(observer);
  }

  unsubscribe(observer: ObserverInterface<T>): void {
    this.observers = this.observers.filter((result) => result !== observer);
  }

  notify(value: T): void {
    this.observers.forEach((result) => result.refresh(value));
  }
}

class Observer<T> implements ObserverInterface<T>{
    private fn: (value: T) => void;
    constructor(fn: (value: T) => void) {
        this.fn = fn;
    }
    refresh(value: T): void {
        this.fn(value);
    }
}

const subjectNumber = new Subject<number>();
const obs1 = new Observer<number>((val) => {
    console.log(`Value Obs1: ${val}`);
});
const obs2 = new Observer<number>((val) => {
    console.log(`Value Obs2: ${val}`);
});

subjectNumber.subscribe(obs1);
subjectNumber.subscribe(obs2);
subjectNumber.notify(53.61);
subjectNumber.notify(111.3333);

const subjectString = new Subject<string>();
const obsStringOne = new Observer<string>((val: string) => console.log(`Value string observer 1: ${val.toUpperCase()}`));
subjectString.subscribe(obsStringOne);
subjectString.notify("Observador string one");