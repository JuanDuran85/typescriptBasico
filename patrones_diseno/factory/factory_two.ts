/**
 *
 * Users Factory Implementation
 *
 */

// Creation of two types of user and Null Object Pattern, in a factory pattern.

interface StaffUsers {
  getSalary(): number;
}

type Keys = keyof typeof UserFactory.getTypeOfUser;
type UserTypes = (typeof UserFactory.getTypeOfUser)[Keys];
type ExtrarInformation<T> = T extends new () => infer R ? R : never;

class ManagerUser implements StaffUsers {
  getSalary(): number {
    return 8000;
  }
}

class DeveloperUser implements StaffUsers {
  getSalary(): number {
    return 4000;
  }
}

class NullStaffUser implements StaffUsers {
  getSalary(): number {
    return 0;
  }
}

//  UserFactory implemented
class UserFactory {
  public static readonly getTypeOfUser = {
    Manager: ManagerUser,
    Developer: DeveloperUser,
  };

  public static getStaffInstance(k: Keys): ExtrarInformation<UserTypes> {
    return (
      (new this.getTypeOfUser[k]() as ExtrarInformation<UserTypes>) ||
      new NullStaffUser()
    );
  }
}

//  UserService as the client that consumes the factory

abstract class UserService {
  public static getSalaryByUser(userType: Keys) {
    return UserFactory.getStaffInstance(userType).getSalary();
  }
}

console.debug("manager", UserService.getSalaryByUser("Manager"));
console.debug("Developer", UserService.getSalaryByUser("Developer"));
