"use strict";
exports.__esModule = true;
var Car_1 = require("./Car");
var Plane_1 = require("./Plane");
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.getCar = function () {
        return new Car_1["default"]();
    };
    VehicleFactory.prototype.getPlane = function () {
        return new Plane_1["default"]();
    };
    return VehicleFactory;
}());
exports["default"] = VehicleFactory;
