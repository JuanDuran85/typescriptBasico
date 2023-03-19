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
type UserTypes = typeof UserFactory.getTypeOfUser[Keys];
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

  public static getTypeOfUser = {
    'Manager': ManagerUser,
    'Developer': DeveloperUser,
  };

  public static getStaffInstance(k: Keys): ExtrarInformation<UserTypes> {
    return new this.getTypeOfUser[k]() || new NullStaffUser();
  }
}

//  UserService as the client that consumes the factory

class UserService {
  getSalaryByUser(userType: Keys) {
    return UserFactory.getStaffInstance(userType).getSalary();
  }
}

console.log("manager", new UserService().getSalaryByUser("Manager"));
console.log("Developer", new UserService().getSalaryByUser("Developer"));