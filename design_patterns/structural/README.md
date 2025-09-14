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

