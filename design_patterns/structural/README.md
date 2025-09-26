# Structural Design Patterns

Structural design patterns are concerned with how classes and objects are composed to form larger structures. They help ensure that if one part of a system changes, the entire system doesn't need to do the same.

## 1. Adapter:

- Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

- Adapter is often used when you want to use an existing class, but its interface doesn't match the one you need.

- Adapter implements the interface of one object and wraps the other one

## 2. Bridge:

- Bridge is a structural design pattern that decouples an abstraction from its implementation, allowing the two to vary independently.

- This pattern involves an interface (the bridge) that defines the abstraction and concrete implementations that provide the specific behavior.

- By using the bridge pattern, you can change the implementation without affecting the client code that uses the abstraction.

- Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

## 4. Composite:

- Composite is a structural design pattern that allows you to compose objects into tree structures to represent part-whole hierarchies and then work with these structures as if they were individual objects.

- Composite lets clients treat individual objects and compositions of objects uniformly.

## 5. Decorator:

- Decorator is a structural design pattern that allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.
  
- The decorator pattern is typically used to extend the functionalities of classes in a flexible and reusable way.

## 6. Facade:

- Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.

- Facade defines a higher-level interface that makes the subsystem easier to use.

## 7. Flyweight:

- Flyweight is a structural design pattern that allows objects to be shared.

- Flyweight is used to minimize memory usage or computational expenses by sharing as much data as possible with similar objects.

- Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

## 8. Proxy:

- Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

- Proxy is used to add a level of indirection to support controlled access, lazy initialization, logging, and more.