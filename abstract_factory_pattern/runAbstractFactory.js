"use strict";
exports.__esModule = true;
var VehicleFactory_1 = require("./VehicleFactory");
var vehicleFactory = new VehicleFactory_1["default"]();
var ourCar = vehicleFactory.createCar();
var ourPlane = vehicleFactory.createPlane();
console.log(ourCar.set_num_of_wheels(), ourCar.set_num_of_passengers(), ourCar.has_gas());
console.log(ourPlane.set_num_of_wheels(), ourPlane.set_num_of_passengers(), ourPlane.has_gas());
