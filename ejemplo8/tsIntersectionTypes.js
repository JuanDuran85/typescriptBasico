var datos = {};
datos.nombre = "Juan";
datos.apellido = "Duran";
var User3 = /** @class */ (function () {
    function User3() {
    }
    return User3;
}());
var Admin = /** @class */ (function () {
    function Admin() {
    }
    Admin.prototype.getPermissions = function () {
        return this.permissions;
    };
    return Admin;
}());
var user;
