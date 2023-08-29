/*
    The Singleton Pattern is a common pattern, and we often only need one of some objects, such as the   global cache, the window object in the browser, etc. The singleton pattern is used to ensure that there is only one instance of a class and to provide a global access point to it.

    A singleton is an object that can only be instantiated once. It is useful fo implementing a global object that can be accessed from anywhere in the application.

    When defining the Singleton class, there are three critical steps:
        1- Define private static property to hold object instance;
        2- Define a private constructor;
        3- Provides a static method to get an object instance.
*/


class Singleton {
    private static principalSingleton: Singleton; //1
    private constructor(){}; //2

    public static getInstance(): Singleton { //3
        if (!Singleton.principalSingleton){
            Singleton.principalSingleton = new Singleton();
        }

        return Singleton.principalSingleton;
    }
}

let instanceOne = Singleton.getInstance();
let instanceTwo = Singleton.getInstance();

console.debug(instanceOne === instanceTwo)