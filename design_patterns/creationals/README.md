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

## 3. Abstract Factory:

- The abstract factory pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

- The abstract factory pattern allows you to create objects that belong to a specific family or group, without specifying the exact class of the object that will be created.

- The abstract factory pattern is often used when the system needs to be independent of how its objects are created, composed, and represented, or when the system needs to be able to work with multiple families of objects.

## 4. Prototype:

- The prototype pattern is a creational design pattern that lets you copy existing objects without making your code dependent on their concrete classes.

- The prototype pattern suggests that you create new objects by copying existing ones, which can be more efficient than creating new objects from scratch.

- The prototype pattern is often used when the cost of creating a new object is more expensive than copying an existing one, or when the system needs to be able to create objects dynamically at runtime.

## 5. Immutability with Copy

- Although immutability is a good practice, it is not always possible. In these cases, a copy of the object can be created and modified. This is useful for maintaining a history of state in interactive applications.

- The immutability with copy pattern suggests that you create a new object that is a copy of the original object, and then modify the new object instead of the original one.