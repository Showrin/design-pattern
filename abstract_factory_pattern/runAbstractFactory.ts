import VehicleFactory from "./VehicleFactory";
import Car from "./Car";
import Plane from "./Plane";
import { Table } from "console-table-printer";
const chalk = require("chalk");

const vehicleFactory: VehicleFactory = new VehicleFactory();
const ourCar: Car = vehicleFactory.createCar();
const ourPlane: Plane = vehicleFactory.createPlane();

const table = new Table();

table.addRow(
  {
    Product: "Car",
    set_num_of_wheels: ourCar.set_num_of_wheels(),
    set_num_of_passengers: ourCar.set_num_of_passengers(),
    has_gas: ourCar.has_gas(),
  },
  { color: "red" }
);

table.addRow(
  {
    Product: "Plane",
    set_num_of_wheels: ourPlane.set_num_of_wheels(),
    set_num_of_passengers: ourPlane.set_num_of_passengers(),
    has_gas: ourPlane.has_gas(),
  },
  { color: "green" }
);

console.log(
  chalk.bold.red(
    "\n### These products are created using [" +
      chalk.underline("Abstract Factory Pattern") +
      "] ###"
  )
);

table.printTable();
