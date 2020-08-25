"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var VehicleFactory_1 = __importDefault(require("./VehicleFactory"));
var console_table_printer_1 = require("console-table-printer");
var chalk = require("chalk");
var vehicleFactory = new VehicleFactory_1.default();
var ourCar = vehicleFactory.createCar();
var ourPlane = vehicleFactory.createPlane();
var table = new console_table_printer_1.Table();
table.addRow({
    Product: "Car",
    set_num_of_wheels: ourCar.set_num_of_wheels(),
    set_num_of_passengers: ourCar.set_num_of_passengers(),
    has_gas: ourCar.has_gas(),
}, { color: "red" });
table.addRow({
    Product: "Plane",
    set_num_of_wheels: ourPlane.set_num_of_wheels(),
    set_num_of_passengers: ourPlane.set_num_of_passengers(),
    has_gas: ourPlane.has_gas(),
}, { color: "green" });
console.log(chalk.bold.red("\n### These products are created using [" +
    chalk.underline("Abstract Factory Pattern") +
    "] ###"));
table.printTable();