# Creational Design Patterns 

Provide object creation mechanisms that increase flexibility and reuse of existing code.

These patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.

## 1. Builder: 

- The builder pattern is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code

- The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.

## 2. Factory: 

- The factory pattern is a creational design pattern that provides a way to create objects without exposing the instantiation logic to the client.

- The factory pattern defines an interface for creating objects in a superclass, but lets subclasses decide which class to instantiate or allows subclasses to alter the type of objects that will be created.

- The factory pattern is often used when the type of object to create is determined by a configuration file, a database, or some other input outside of the object's class.