/**
 * Strategy Pattern
 *
 * Strategy is a behavioral design pattern that turns a request into a stand-alone object that contains all
 * information about the request. This transformation lets you pass requests as a method arguments, delay or
 * queue a request’s execution, and support undoable operations. Also, is a design pattern that lets you define
 * a family of algorithms, encapsulate each one, and make them interchangeable
 */

interface Strategy {
    execute(data: unknown): unknown;
}

class LastElementStrategy implements Strategy {
    public execute(data: unknown[]): unknown {
        return data[data.length - 1];
    }
}

const strategy = new LastElementStrategy();
const data = [1,2,3,4,6,9,0];

console.log(strategy.execute(data));