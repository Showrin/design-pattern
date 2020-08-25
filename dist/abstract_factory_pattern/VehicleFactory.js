"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Car_1 = __importDefault(require("./Car"));
var Plane_1 = __importDefault(require("./Plane"));
var VehicleFactory = /** @class */ (function () {
    function VehicleFactory() {
    }
    VehicleFactory.prototype.createCar = function () {
        return new Car_1.default();
    };
    VehicleFactory.prototype.createPlane = function () {
        return new Plane_1.default();
    };
    return VehicleFactory;
}());
exports.default = VehicleFactory;
