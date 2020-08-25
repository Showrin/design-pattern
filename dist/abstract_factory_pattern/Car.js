"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.set_num_of_wheels = function () {
        return 4;
    };
    Car.prototype.set_num_of_passengers = function () {
        return 4;
    };
    Car.prototype.has_gas = function () {
        return true;
    };
    return Car;
}());
exports.default = Car;
