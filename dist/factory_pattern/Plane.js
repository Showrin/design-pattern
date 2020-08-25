"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Plane = /** @class */ (function () {
    function Plane() {
    }
    Plane.prototype.set_num_of_wheels = function () {
        return 14;
    };
    Plane.prototype.set_num_of_passengers = function () {
        return 100;
    };
    Plane.prototype.has_gas = function () {
        return false;
    };
    return Plane;
}());
exports.default = Plane;
