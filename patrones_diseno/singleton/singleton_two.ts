/**
 *
 * SINGLETON PATTERN
 *
 * The singleton pattern is used to ensure that there is only one instance of a class and to provide a
 * global access point to it.
 *
 * When developing software systems, if we encounter objects that take too much time or consume too many
 * resources when creating them, but are frequently used, we can consider using the singleton pattern.
 *
*/

// When defining the Singleton class, there are three critical steps:

// 1. Define private static property to hold object instance;
// 2. Define a private constructor;
// 3. Provides a static method to get an object instance.

class SingletonClass {
    private static sigleton: SingletonClass;
    private constructor(){}

    public static getInstance(): SingletonClass{
        if(!SingletonClass.sigleton) {
            SingletonClass.sigleton = new SingletonClass();
        }

        return SingletonClass.sigleton;
    }
}

const instance1: SingletonClass = SingletonClass.getInstance();
const instance2 : SingletonClass= SingletonClass.getInstance();

console.debug(instance1 === instance2);