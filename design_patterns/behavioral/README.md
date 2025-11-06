# Behavioral Design Patterns 

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

These patterns help in defining how objects interact in a system, promoting loose coupling and enhancing flexibility.

## 1. Chain of Responsibility

- The Chain of Responsibility pattern allows multiple objects to handle a request without the sender needing to know which object will ultimately process it. This is achieved by passing the request along a chain of potential handlers until one of them handles it.
  
- Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

## 2. Command

- Is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

- The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations. It also supports undoable operations.

## 3. Iterator

- Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

- The Iterator pattern provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.

## 4. Mediator

- Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

- The Mediator pattern defines an object that encapsulates how a set of objects interact. Mediators provide a way to decouple objects from each other, making them independent of each other.

## 5. Memento

- Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

- The Memento pattern provides a way to capture and externalize an object's internal state so that the object can be restored to this state later, without violating encapsulation.

## 6. Observer

- Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they're observing.

- The Observer pattern defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified and updated automatically.

## 7. State

- State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

- The State pattern allows an object to alter its behavior when its internal state changes. The object will appear to change its class.

## 8. Strategy

- Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

- The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them interchangeable. Strategy lets the algorithm vary independently from clients that use it.

## 9. Template Method

- Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.


