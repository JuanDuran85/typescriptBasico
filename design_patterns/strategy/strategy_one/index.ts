/**
 * Strategy Pattern
 *
 * Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.
 *
 */

// Strategy Interface

interface StrategyInterface {
  login(user: string, password: string): boolean;
}

// Contex Class
class LoginContext {
    private strategy: StrategyInterface;

    constructor(strategy: StrategyInterface){
        this.strategy = strategy;
    };

    setStrategy(strategy: StrategyInterface) {
        this.strategy = strategy;
    }

    login(user: string, password: string): boolean {
        return this.strategy.login(user, password);
    }
}

// Strategies Classes
class LoginDbStrategy implements StrategyInterface {
    login(user: string, password: string): boolean {
        console.debug("Verificando usuario...");
        if(user === "admin" && password === "1234") return true;
        return false;
    }
}

class LoginServiceStrategy implements StrategyInterface {
    login(user: string, password: string): boolean {
        console.debug("Verificando usuario en el servicio...");
        if(user === "service" && password === "4321") return true;
        return false;
    }
}

const auth = new LoginContext(new LoginDbStrategy());
const result = auth.login("admin", "1234");
console.debug(result);
auth.setStrategy(new LoginServiceStrategy());
const result2 = auth.login("admin", "444");
console.debug(result2);
