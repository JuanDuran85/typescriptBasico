# Behavioral Design Patterns 

Behavioral design patterns are concerned with algorithms and the assignment of responsibilities between objects.

These patterns help in defining how objects interact in a system, promoting loose coupling and enhancing flexibility.

## 1. Chain of Responsibility

- The Chain of Responsibility pattern allows multiple objects to handle a request without the sender needing to know which object will ultimately process it. This is achieved by passing the request along a chain of potential handlers until one of them handles it.
  
- Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.