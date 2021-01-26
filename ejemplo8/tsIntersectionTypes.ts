class User3 {
    name: string;
    constructor(name:string){
        this.name = name;
    }
}

class Admin {
    permissions: number;
    constructor(permissions: number){
        this.permissions = permissions;
    }
    getPermissions() : number {
        return this.permissions;
    }
} 

let user: User3 & Admin;

user.name = "Juan";
user.permissions = 3;
console.log(user.name);
console.log(user.permissions);
console.log(user.getPermissions());
user.getPermissions();